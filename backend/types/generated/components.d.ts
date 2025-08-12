import type { Attribute, Schema } from '@strapi/strapi';

export interface GamesIgra extends Schema.Component {
  collectionName: 'components_games_igra';
  info: {
    description: '';
    displayName: '\u0406\u0433\u0440\u0430';
  };
  attributes: {
    count: Attribute.String;
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Statistics: Attribute.String;
  };
}

export interface GamesOponent extends Schema.Component {
  collectionName: 'components_games_oponents';
  info: {
    description: '';
    displayName: 'Oponent';
  };
  attributes: {
    count: Attribute.String;
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Statistics: Attribute.String;
  };
}

export interface MenuItemsItemsSubmenu extends Schema.Component {
  collectionName: 'components_menu_items_items_submenus';
  info: {
    displayName: 'submenu';
  };
  attributes: {};
}

export interface MenuItemsDrop extends Schema.Component {
  collectionName: 'components_menu_items_drops';
  info: {
    description: '';
    displayName: 'drop';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface MenuItemsItems extends Schema.Component {
  collectionName: 'components_menu_items_items';
  info: {
    description: '';
    displayName: 'items';
    icon: 'bulletList';
  };
  attributes: {
    label: Attribute.String;
    order: Attribute.Integer;
    slug: Attribute.String;
    submenu: Attribute.Component<'menu-items.drop', true>;
  };
}

export interface MenuItemsSubMenu extends Schema.Component {
  collectionName: 'components_menu_items_sub_menus';
  info: {
    displayName: 'sub_menu';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface MenuItemsSubmenu extends Schema.Component {
  collectionName: 'components_menu_items_submenus';
  info: {
    displayName: 'submenu';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'games.igra': GamesIgra;
      'games.oponent': GamesOponent;
      'menu-items-items.submenu': MenuItemsItemsSubmenu;
      'menu-items.drop': MenuItemsDrop;
      'menu-items.items': MenuItemsItems;
      'menu-items.sub-menu': MenuItemsSubMenu;
      'menu-items.submenu': MenuItemsSubmenu;
    }
  }
}
