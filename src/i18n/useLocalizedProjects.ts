import { useMemo } from 'react';
import { projects as enProjects } from '../data/projects';
import type { Project } from '../data/projects';
import { useLanguage } from './LanguageContext';
import { projectsZh } from './projectsZh';

/**
 * Returns the project list localized to the current language.
 * English data (with all image paths / external links) is the source of truth;
 * Chinese overrides shallow-merge their fields on top.
 */
export function useLocalizedProjects(): Project[] {
  const { language } = useLanguage();
  return useMemo(() => {
    if (language === 'en') return enProjects;
    return enProjects.map((p) => {
      const override = projectsZh[p.id];
      if (!override) return p;
      return { ...p, ...override };
    });
  }, [language]);
}

/** Single-project lookup, localized. */
export function useLocalizedProject(id: string | null | undefined): Project | null {
  const list = useLocalizedProjects();
  return useMemo(() => {
    if (!id) return null;
    return list.find((p) => p.id === id) ?? null;
  }, [list, id]);
}
