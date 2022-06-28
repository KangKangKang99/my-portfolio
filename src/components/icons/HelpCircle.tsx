import { IIcon } from '#Configs/interfaces';

interface IProps extends IIcon {}

export const IconHelpCircle: React.FC<IProps> = (props: IProps) => {
    const width = props.width || 16;
    const height = props.height || 16;
    const className = props.className || '';

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={`feather feather-help-circle ${className}`}
        >
            <circle cx='12' cy='12' r='10' />
            <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
            <line x1='12' y1='17' x2='12.01' y2='17' />
        </svg>
    );
};
