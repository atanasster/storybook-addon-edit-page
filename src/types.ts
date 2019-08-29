export interface IFileInfo {
  id?: string,
  kind?: string,
  name?: string,
  displayName?: string,
  fileName?: string,
  shortName?: string,
}

export type fileNameResolveType = (info: IFileInfo) => string;

export interface EditStoriesProps {
  fileNameResolve?: fileNameResolveType,
  editPageLabel?: string,
}
