'use client'

import { MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor'
import dynamic from 'next/dynamic'
import { forwardRef } from 'react'

// This is the only place InitializedMDXEditor is imported directly.
const Mdx_Editor_Initializer = dynamic(() => import('./Mdx_Editor_Initializer'), {
	// Make sure we turn SSR off
	ssr: false
})

// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const Mdx_Editor_Ref = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => <Mdx_Editor_Initializer { ...props } editorRef={ ref } />)

// TS complains without the following line
Mdx_Editor_Ref.displayName = 'Mdx_Editor_Ref'