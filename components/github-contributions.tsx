'use client';

import React from 'react';
import {GitHubCalendar} from "react-github-calendar";


type GitHubContributionsProps = {
    username: string;
};

const GitHubContributions = ({ username }: GitHubContributionsProps) => {
    const [blockSize, setBlockSize] = React.useState(15);

    React.useEffect(() => {
        const updateBlockSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setBlockSize(12);
            } else if (width < 768) {
                setBlockSize(15);
            } else if (width < 1024) {
                setBlockSize(18);
            } else if (width < 1280) {
                setBlockSize(22);
            } else if (width < 1536) {
                setBlockSize(26);
            } else {
                setBlockSize(30);
            }
        };

        updateBlockSize();
        window.addEventListener('resize', updateBlockSize);
        return () => window.removeEventListener('resize', updateBlockSize);
    }, []);

    return (
        <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-slate-900/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-slate-600">
            <div className="min-w-full">
                <GitHubCalendar 
                    showTotalCount={false} 
                    showColorLegend={false} 
                    username={username} 
                    maxLevel={3} 
                    colorScheme='dark' 
                    blockSize={blockSize}
                />
            </div>
        </div>
    );
};

export default GitHubContributions;
