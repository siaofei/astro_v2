export type MenuType = {
  name: string
  uri: string
  icon?: any
}

export const MenuAbout = {
  name: '关于',
  uri: '/about/',
}

export const MENUS: MenuType[] = [
  {
    name: '主页',
    uri: '/',
  },
  MenuAbout,
  {
    name: '笔记',
    uri: '/notes/',
  },
  {
    name: '博客',
    uri: '/blogs/',
  },
  {
    name: '标签',
    uri: '/tags/',
  },
  {
    name: '归档',
    uri: '/archives/',
  },
]

export const HIDDEN_MENUS: MenuType[] = [
  {
    name: '工具',
    uri: '/tools/',
  },
  {
    name: '书签',
    uri: '/bookmarks/',
  },
  {
    name: '阅读',
    uri: '/reading/',
  },
  {
    name: '游戏',
    uri: '/games/',
  },
]
