import React from "react";

const HomeSkeleton = () => (
    <div className="px-6 sm:px-12 py-6 md:py-12 overflow-y-auto h-full hide-scrollbar">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
            <div className="flex flex-col mb-2 sm:mb-0 w-full sm:w-2/3">
                <div className="sm:hidden w-[200px] h-[200px] bg-slate-700 rounded-full self-center mb-6 animate-pulse" />
                <div className="h-10 bg-slate-700 rounded-md w-3/4 sm:w-4/5 mb-3 animate-pulse self-center sm:self-start" />
                <div className="h-8 bg-slate-700 rounded-md w-5/6 mb-4 animate-pulse self-center sm:self-start" />
                <div className="h-5 bg-slate-700 rounded-md w-2/3 mb-4 animate-pulse hidden sm:block" />
                <div className="flex gap-2 self-center sm:self-start">
                    <div className="h-9 bg-slate-700 rounded-md w-24 animate-pulse" />
                    <div className="h-9 bg-slate-700 rounded-md w-28 animate-pulse" />
                </div>
                <div className="flex gap-2 mt-3 self-center sm:self-start">
                    <div className="h-8 w-8 bg-slate-700 rounded-md animate-pulse" />
                    <div className="h-8 w-8 bg-slate-700 rounded-md animate-pulse" />
                    <div className="h-8 w-8 bg-slate-700 rounded-md animate-pulse" />
                    <div className="h-8 w-8 bg-slate-700 rounded-md animate-pulse" />
                    <div className="h-8 w-8 bg-slate-700 rounded-md animate-pulse" />
                </div>
            </div>
            <div className="hidden sm:block w-[200px] h-[200px] bg-slate-700 rounded-full animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
            <div className="h-16 bg-slate-700 rounded-lg animate-pulse" />
            <div className="h-16 bg-slate-700 rounded-lg animate-pulse" />
            <div className="h-40 bg-slate-700 rounded-lg animate-pulse" />
            <div className="h-40 bg-slate-700 rounded-lg animate-pulse" />
        </div>

        <div className="my-4">
            <div className="h-10 bg-slate-700 rounded-md w-full mb-4 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="h-32 bg-slate-700 rounded-lg animate-pulse" />
                <div className="h-32 bg-slate-700 rounded-lg animate-pulse" />
                <div className="h-32 bg-slate-700 rounded-lg animate-pulse" />
                <div className="h-32 bg-slate-700 rounded-lg animate-pulse" />
                <div className="h-32 bg-slate-700 rounded-lg animate-pulse" />
                <div className="h-32 bg-slate-700 rounded-lg animate-pulse" />
            </div>
        </div>

        <div className="h-16 bg-slate-700 rounded-md mt-8 animate-pulse" />
    </div>
);

export default HomeSkeleton;
