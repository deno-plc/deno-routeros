export const debounce = (callback: (...args: any) => void, timeout = 0) => {
    let timeoutObj: number | undefined = undefined;

    return {
        run: (...args: any) => {
            const context = this;
            clearTimeout(timeoutObj);
            timeoutObj = setTimeout(
                () => callback.apply(context, args),
                timeout,
            );
        },

        cancel: () => {
            clearTimeout(timeoutObj);
        },
    };
};
