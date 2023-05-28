import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const AnglerIcon = (props: SvgIconProps) => {
  const { strokeWidth, ...others } = props;
  return (
    <SvgIcon {...others}>
      <svg viewBox="0 0 1024 1024" version="1.1" width="24" height="24">
        <path
          stroke="#9155FD"
          {...{ strokeWidth }}
          d="M512 72c-11.2 12.8-36.8 24-57.6 24-32 0-38.4 8-38.4 48 0 35.2-8 48-28.8 48-38.4 0-76.8 43.2-91.2 97.6-8 33.6 0 54.4 38.4 99.2 48 54.4 65.6 107.2 35.2 107.2-8 0-30.4-19.2-49.6-43.2-27.2-35.2-40-40-60.8-27.2-22.4 16-27.2 52.8-32 244.8-3.2 142.4 1.6 225.6 11.2 225.6s19.2-84.8 20.8-212.8c3.2-131.2 11.2-209.6 20.8-206.4 9.6 1.6 16 46.4 16 99.2 0 99.2 4.8 108.8 35.2 78.4 28.8-28.8 46.4-6.4 68.8 88l20.8 86.4-59.2 62.4c-57.6 62.4-80 107.2-30.4 67.2 30.4-25.6 275.2-30.4 340.8-6.4 36.8 12.8 35.2 8-22.4-62.4l-60.8-75.2 35.2-96c20.8-52.8 43.2-99.2 51.2-104 8-4.8 32 4.8 51.2 24 46.4 44.8 65.6 43.2 35.2-1.6-30.4-43.2-35.2-204.8-6.4-233.6 12.8-12.8 12.8-19.2 1.6-19.2-9.6 0-25.6 11.2-36.8 24-30.4 36.8-46.4 28.8-57.6-33.6-6.4-35.2-3.2-72 9.6-94.4 14.4-27.2 16-44.8 3.2-59.2-8-11.2-19.2-38.4-22.4-60.8-3.2-27.2-16-41.6-40-44.8C592 112 566.4 96 553.6 78.4c-19.2-27.2-24-28.8-41.6-6.4zM588.8 128c59.2 27.2 67.2 48 14.4 48-44.8 0-112-44.8-97.6-65.6 4.8-9.6 14.4-12.8 19.2-9.6 6.4 3.2 35.2 16 64 27.2z m3.2 68.8c68.8 19.2 107.2 59.2 57.6 59.2C616 256 432 163.2 432 147.2c0-32 24-33.6 56-3.2 19.2 17.6 65.6 41.6 104 52.8z m-64 36.8c91.2 36.8 116.8 94.4 118.4 254.4 0 107.2-6.4 144-44.8 228.8l-46.4 100.8 35.2 35.2c17.6 20.8 33.6 40 33.6 44.8 0 3.2-49.6 6.4-112 6.4-118.4 0-140.8-17.6-80-60.8 30.4-20.8 30.4-25.6 8-68.8-68.8-132.8-62.4-302.4 12.8-339.2 33.6-16 32-17.6-14.4-17.6-54.4-1.6-116.8-54.4-86.4-73.6 11.2-6.4 14.4-28.8 8-56-17.6-76.8 54.4-99.2 168-54.4z m-188.8 89.6c-14.4 14.4-19.2 11.2-19.2-19.2s4.8-33.6 19.2-19.2c14.4 14.4 14.4 24 0 38.4zM720 528c0 25.6-6.4 48-16 48-8 0-16-22.4-16-48 0-27.2 8-48 16-48 9.6 0 16 20.8 16 48z m-360 0c9.6 32 0 64-20.8 64-6.4 0-14.4-22.4-16-48-4.8-54.4 20.8-65.6 36.8-16z"
        />
        <path
          d="M404.8 257.6c-20.8 20.8-9.6 62.4 17.6 62.4 28.8 0 56-33.6 46.4-57.6-9.6-27.2-40-28.8-64-4.8z m51.2 12.8c4.8 8 1.6 19.2-8 25.6-8 4.8-16-1.6-16-14.4 0-28.8 9.6-33.6 24-11.2z"
          fill="#9155FD"
        ></path>
      </svg>
    </SvgIcon>
  );
};
