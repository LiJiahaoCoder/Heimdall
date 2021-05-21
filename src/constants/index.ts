export enum ComponentName {
  Header = "header",
  Sider = "sider",
  Panel = "panel",
}

export enum Status {
  Normal = "NORMAL",
  Warning = "WARNING",
  Danger = "DANGER",
}

export const STATUS_TEXT: Record<Status, string> = {
  [Status.Danger]: "危险",
  [Status.Warning]: "警告",
  [Status.Normal]: "正常",
};
