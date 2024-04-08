'use client'
import type { ForwardedRef } from 'react'
import {
	headingsPlugin,
	listsPlugin,
	quotePlugin,
	thematicBreakPlugin,
	markdownShortcutPlugin,
	MDXEditor,
	type MDXEditorMethods,
	type MDXEditorProps,
	toolbarPlugin,
	linkDialogPlugin,
	codeBlockPlugin,
	codeMirrorPlugin,
} from '@mdxeditor/editor'
import Mdx_Editor_Tools from './Mdx_Editor_Tools'

export default function Mdx_Editor_Initializer({
	editorRef,
	...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
	return (
		<MDXEditor
			plugins={ [
				toolbarPlugin({
					toolbarContents:() => <>
					<Mdx_Editor_Tools/>
					</>
				}),
				headingsPlugin(),
				listsPlugin(),
				linkDialogPlugin(),
				codeBlockPlugin({
					defaultCodeBlockLanguage:'ts'
				}),
				codeMirrorPlugin({
					codeBlockLanguages:{
						css:'CSS',
						ts:'TypeScript'
					}
				}),
				quotePlugin(),
				thematicBreakPlugin(),
				markdownShortcutPlugin()
			] }
			{ ...props }
			ref={ editorRef }
		/>
	)
}