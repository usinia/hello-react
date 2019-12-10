import React from "react";
import EditorTemplate from "components/editor/EditorTemplate";
import EditorHeader from "components/editor/EditorHeader/EditorHeader";
// import EditorPane from "components/editor/EditorPane/EditorPane";
// import PreviewPane from "components/editor/PreviewPane/PreviewPane";
import EditorPaneContainer from "containers/editor/EditorPaneContainer";
import PreviewPaneContainer from "containers/editor/PreviewPaneContainer";

const EditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeader />}
      editor={<EditorPaneContainer />}
      preview={<PreviewPaneContainer />}
    />
  );
};

export default EditorPage;
