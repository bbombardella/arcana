import s from "./Sigil.module.scss";

export function Sigil() {
    return (
        <svg className={s.sigil} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="#c9a84c" strokeWidth="0.5" opacity="0.6" />
            <circle cx="30" cy="30" r="20" stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
            <polygon
                points="30,5 36,22 54,22 39,33 45,50 30,40 15,50 21,33 6,22 24,22"
                stroke="#c9a84c"
                strokeWidth="0.5"
                fill="none"
                opacity="0.7"
            />
            <circle cx="30" cy="30" r="4" fill="#c9a84c" opacity="0.8" />
        </svg>
    );
}
