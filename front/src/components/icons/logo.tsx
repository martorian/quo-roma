interface Props {
    className?: string;
}

export const Logo = ({className}: Props) => {
    return (
        <svg className={className} width="194" height="219" viewBox="0 0 194 219" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 161.439L96.9716 0L193.941 161.439L96.9716 218.951L0 161.439Z" fill="black"/>
            <mask id="mask0_204_3614" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="194" height="219">
                <path d="M0 161.439L96.9716 0L193.941 161.439L96.9716 218.951L0 161.439Z" fill="black"/>
            </mask>
            <g mask="url(#mask0_204_3614)">
                <path d="M184.752 35.95L96.9988 121.997L9.24801 35.95L96.9988 5.29629L184.752 35.95Z" fill="black" stroke="white" stroke-width="10"/>
                <circle cx="97" r="49" fill="black" stroke="white" stroke-width="10"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M158 115H36L60.2614 175H85.8053L97 219L108.195 175H134.432L158 115Z" fill="white"/>
            <circle cx="97" cy="82" r="12" fill="white"/>
            <circle cx="97" cy="145" r="6" fill="black"/>
            <circle cx="119" cy="145" r="6" fill="black"/>
            <circle cx="77" cy="145" r="6" fill="black"/>
        </svg>

    );
};
