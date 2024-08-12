<<<<<<< HEAD
'use client';

import Theme from './plugins/Theme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import { HeadingNode } from '@lexical/rich-text';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import React from 'react';
=======
"use client";

import Theme from "./plugins/Theme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import React from "react";

import {
  FloatingComposer,
  FloatingThreads,
  liveblocksConfig,
  LiveblocksPlugin,
  useEditorStatus,
} from "@liveblocks/react-lexical";
import Loader from "../Loader";

import FloatingToolbarPlugin from "./plugins/FloatingToolbarPlugin";
import { useThreads } from "@liveblocks/react/suspense";
import Comments from "../Comments";
import { DeleteModal } from "../DeleteModal";
import { useUser } from "@clerk/nextjs";
>>>>>>> master

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

<<<<<<< HEAD
export function Editor() {
  const initialConfig = {
    namespace: 'Editor',
=======
export function Editor({
  roomId,
  currentUserType,
  roomMetadata,
}: {
  roomId: string;
  currentUserType: UserType;
  roomMetadata: any;
}) {
  const clerkUser = useUser();
  const currentUserEmail = clerkUser.user?.emailAddresses[0].emailAddress;

  const status = useEditorStatus();
  const { threads } = useThreads();

  const initialConfig = liveblocksConfig({
    namespace: "Editor",
>>>>>>> master
    nodes: [HeadingNode],
    onError: (error: Error) => {
      console.error(error);
      throw error;
    },
    theme: Theme,
<<<<<<< HEAD
  };
=======
    editable: currentUserType === "editor",
  });
>>>>>>> master

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container size-full">
<<<<<<< HEAD
        <ToolbarPlugin />

        <div className="editor-inner h-[1100px]">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="editor-input h-full" />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
=======
        <div className="toolbar-wrapper flex min-w-full justify-between">
          <ToolbarPlugin />
          {currentUserType === "editor" &&
            roomMetadata.email === currentUserEmail && (
              <DeleteModal roomId={roomId} />
            )}
        </div>

        <div className="editor-wrapper flex flex-col items-center justify-start">
          {status === "not-loaded" || status === "loading" ? (
            <Loader>Loading...</Loader>
          ) : (
            <div className="editor-inner min-h-[1100px] relative mb-5 h-fit w-full max-w-[800px] shadow-md lg:mb-10">
              <RichTextPlugin
                contentEditable={
                  <ContentEditable className="editor-input h-full" />
                }
                placeholder={<Placeholder />}
                ErrorBoundary={LexicalErrorBoundary}
              />
              {currentUserType === "editor" && <FloatingToolbarPlugin />}
              <HistoryPlugin />
              <AutoFocusPlugin />
            </div>
          )}

          <LiveblocksPlugin>
            <FloatingComposer className="w-[350px]" />
            <FloatingThreads threads={threads} />
            <Comments />
          </LiveblocksPlugin>
>>>>>>> master
        </div>
      </div>
    </LexicalComposer>
  );
}
