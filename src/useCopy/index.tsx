import writeText from 'copy-to-clipboard';
import { useCallback } from 'react';
import useSafeState from '../useSafeState';

export type CopySuccessFn = (text: string) => void;

export interface useCopyProps {
  onSuccess?: CopySuccessFn;
  onError?: (err: Error) => void;
}

const useCopy = (props?: useCopyProps): [string | undefined, (value?: string | number) => void] => {
  const [copyText, setCopyText] = useSafeState<string | undefined>(undefined);

  const copy = useCallback(
    (value?: string | number) => {
      if (!value) return setCopyText(undefined);
      try {
        writeText(value.toString());
        setCopyText(value.toString());
        props?.onSuccess?.(value.toString()); // Call onSuccess if provided
      } catch (err) {
        setCopyText(undefined);
        props?.onError?.(err); // Call onError if provided
      }
    },
    [props],
  );

  return [copyText, copy];
};

export default useCopy;
