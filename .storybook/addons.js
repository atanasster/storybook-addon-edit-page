import { editStories } from '../dist';

const gitPageResolver = ({ fileName } ) => {
  return fileName;
}
editStories({
  fileNameResolve: gitPageResolver,
  editPageLabel: 'edit this page...',
});
