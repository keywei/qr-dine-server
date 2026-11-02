import { CreateMenuItemDTO } from '../types/menu';

export const mapOptionGroups = (groups?: CreateMenuItemDTO['options']) =>
  groups?.map((g) => ({
    title: g.title,
    type: g.type || 'SINGLE',
    isRequired: Boolean(g.isRequired),
    options: {
      create: (g.options || []).map((o) => ({
        name: o.name,
        extraPrice: Number(o.extraPrice || 0),
      })),
    },
  }));
