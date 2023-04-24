import cookie, {CookieSerializeOptions} from "cookie";

type CookieNames = 'token' | 'username';

const getBaseDomain = () => {
    const hostname = window.location.hostname;
    return hostname.split('.').slice(-2).join('.');
};

export const setCookie = (
    name: CookieNames,
    expires: Date = new Date(2050, 1, 1)
) => (value: string, setBaseDomain : boolean = false) => {
    const secure = window && window.location.protocol === "https:";

    const options: CookieSerializeOptions = { expires, secure, path: '/'};

    if (setBaseDomain) {
        const baseDomain = getBaseDomain();
        options.domain = baseDomain;
    }

    document.cookie = cookie.serialize(name, `${setBaseDomain} ${value}`, options);
};

export const getCookie = (cookieName: CookieNames) => () => typeof document !== undefined ? parseCookie(document.cookie, cookieName) : null;

export const parseCookie = (rawCookie: string | null | undefined, cookieName: CookieNames) => {
    const value = cookie.parse(rawCookie || '')[cookieName];
    if (value) return value as string;
    return null;
}

export const clearCookies = (name: CookieNames) => () => setCookie(name, new Date(1970, 1, 1))('');