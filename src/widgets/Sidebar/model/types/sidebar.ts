import React from 'react';

export interface SidebarItemType {
    path: string
    text: string
    Ico: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}
