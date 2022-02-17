export const localStorageEffect =
  (key: string) =>
  //@ts-ignore
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
