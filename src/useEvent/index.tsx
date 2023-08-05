import { useEffect, useRef } from 'react';

type EventCallback = (event: Event) => void;

const useEvent = (eventName: string, handler: EventCallback, element: HTMLElement | Window = window): void => {
  const savedHandler = useRef<EventCallback>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEvent;
