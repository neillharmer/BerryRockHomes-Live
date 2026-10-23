import HeroBento from '@/components/Home/HeroBento';

export const metadata = {
    title: 'Hero Preview · Bento',
    robots: { index: false, follow: false },
};

export default function HeroPreviewPage() {
    return (
        <>
            <HeroBento />
            <div className="bg-white py-10 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-600 mb-2">Preview only</p>
                    <p className="text-sm text-slate-500">
                        This is an alternate bento hero mockup. The live home page is unchanged.
                    </p>
                </div>
            </div>
        </>
    );
}
