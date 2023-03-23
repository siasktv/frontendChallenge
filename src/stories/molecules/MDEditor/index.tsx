// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

// Custom styles for the MDEditor
import MDEditorRoot from "./MDEditorRoot";

// declaring types for the MDEditor
interface Props {
  [key: string]: any;
}

function MDEditor(props: Props): JSX.Element {
  return (
    <MDEditorRoot ownerState={{ darkMode: false }}>
      {(<ReactQuill theme="snow" {...props} />) as any}
    </MDEditorRoot>
  );
}

export default MDEditor;
