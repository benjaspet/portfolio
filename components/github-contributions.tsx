'use client';

import React from 'react';
import {ActivityCalendar, type Activity} from 'react-activity-calendar';

type GitHubContributionsProps = {
    username: string;
};

const GITHUB_API_BASE = "https://github-contributions-api.jogruber.de/v4/";
const GITHUB_THEME = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
};

const GitHubContributions = ({ username }: GitHubContributionsProps) => {
    const [blockSize, setBlockSize] = React.useState(16);
    const blockMargin = 4;
    const [contributions, setContributions] = React.useState<Activity[] | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const updateBlockSize = () => {
            const width = window.innerWidth;
            if (width < 640) return setBlockSize(12);
            if (width < 1024) return setBlockSize(15);
            return setBlockSize(20);
        };

        updateBlockSize();
        window.addEventListener('resize', updateBlockSize);
        return () => window.removeEventListener('resize', updateBlockSize);
    }, []);

    React.useEffect(() => {
        let cancelled = false;

        const load = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const res = await fetch(`${GITHUB_API_BASE}${username}?y=last`);
                const json = await res.json();
                if (!res.ok) throw new Error(json?.error ?? 'Unable to load GitHub activity.');
                if (!cancelled) setContributions(json.contributions as Activity[]);
            } catch (err) {
                if (!cancelled) setError(err instanceof Error ? err.message : 'Unable to load GitHub activity.');
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        };

        load();

        return () => {
            cancelled = true;
        };
    }, [username]);

    const estimatedWeeks = 54;
    const labelHeight = 22;
    const skeletonWidth = estimatedWeeks * (blockSize + blockMargin) - blockMargin;
    const skeletonHeight = labelHeight + (blockSize + blockMargin) * 7 - blockMargin;
    const skeletonStyle = {
        height: skeletonHeight,
        minWidth: skeletonWidth,
    } satisfies React.CSSProperties;

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="bg-slate-700 rounded-lg animate-pulse" style={skeletonStyle} />
            );
        }

        if (error) {
            return <p className="text-sm text-red-400">{error}</p>;
        }

        if (!contributions?.length) {
            return <p className="text-sm text-gray-400">No contribution data available.</p>;
        }

        return (
            <ActivityCalendar
                data={contributions}
                showTotalCount={false}
                showColorLegend={false}
                colorScheme="dark"
                blockSize={blockSize}
                blockMargin={blockMargin}
                theme={GITHUB_THEME}
                maxLevel={4}
            />
        );
    };

    return (
        <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-slate-900/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-slate-600">
            <div className="min-w-full">
                {renderContent()}
            </div>
        </div>
    );
};

export default GitHubContributions;
