export type NewsType = {
    key: number;
    header: string;
    headerUrl: string;
    highTimeline: boolean;
    liveBlock: boolean;
    manual: { banner: boolean; highTimeline: boolean }
    data?: any //DataNewsType[]
};

export type DataNewsType = {
    anotherDomainContent: boolean;
    canonicalUrl: string;
    fancyUrl: string;
    hasActiveMedia: boolean;
    heading: string;
    id: number;
    parentContentPath: string;
    primaryCategoryId: number;
    rootCategoryId: number;
    rootContentId: number;
    scheduleStart: number;
    squarePhotos: any[]
    subHeading: string;
    type: string;
    verticalPhotos: any[]
};
