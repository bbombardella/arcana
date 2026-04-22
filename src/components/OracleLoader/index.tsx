import s from "./OracleLoader.module.scss";

export function OracleLoader() {
  return (
    <div className={s.loader}>
      <div className={s.glyphs}>
        <span>✦</span>
        <span>◈</span>
        <span>✦</span>
      </div>
      <p className={s.text}>Les arcanes murmurent auprès de l'oracle…</p>
    </div>
  );
}
