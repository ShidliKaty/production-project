import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export enum TitleTag {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3'
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapToHeaderTag: Record<TitleTag, HeaderTagType> = {
    [TitleTag.H3]: 'h3',
    [TitleTag.H2]: 'h2',
    [TitleTag.H1]: 'h1',
};

interface TextProps {
    className?: string;
    title?: string;
    titleTag?: HeaderTagType;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        titleTag = TitleTag.H2,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapToHeaderTag[titleTag];

    const mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={cls.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
