import { editPage } from '../dist';

const gitPageResolver = ({ fileName } ) => {
  return fileName;
}
editPage({
  fileNameResolve: gitPageResolver,
  editPageLabel: 'edit this page...',
});
