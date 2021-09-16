import { File, DirectUploadResult } from '../types';
interface DirectUploadParams {
    directUploadsUrl: string;
    file: File;
    headers?: object;
    onStatusChange: (data: DirectUploadResult) => void;
    interval?: number;
}
declare const directUpload: ({ directUploadsUrl, file, headers, onStatusChange, interval }: DirectUploadParams) => Promise<string | void>;
export default directUpload;
