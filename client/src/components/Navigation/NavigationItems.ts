
type NavigationItem = {
  id: string,
  value?: string,
  link: string,
  icon?: string,
  newTab?: boolean,
}

export const NavigationItems: NavigationItem[] = [
  {
    id: "passport",
    value: "Your Passport",
    link: "/",
  },
  {
    id: "connect",
    link: "/register",
    icon: "people",
  }
]
