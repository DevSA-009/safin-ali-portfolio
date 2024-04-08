import Mdx_Editor from '@/components/CSR/Markdown/Mdx_Editor';
import React from 'react';

export default function PostDraftPage () {

	return (
		<section className={`w-full h-dvh bg-black/40`}>
			<div className={`w-3/4 mx-auto pt-5`}>
				<Mdx_Editor/>
			</div>
		</section>
	);
}