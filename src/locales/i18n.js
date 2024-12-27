import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    ko: {
        translation: {
            main: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이보전하세"
        }
    },
    en: {
        translation: {
            main: "God blesses us so that the East Sea waters and Baekdusan Mountain dry and worn out. Long live the nation, Mugunghwa, Samcheonri, Gorgeous Gangsan. As if the pine iron armor was wrapped around Namsan Mountain, the wind and frost invariance is our spirit. Mugunghwa, Samcheonri, Gorgeous Gangsan. Conserve the path to Daehan, a man of Mugunghwa, Samcheonri, Gorgeous Gangsan. Conserve the path to Daehan, a man of Mugunghwa, Samcheonri, Gorgeous Gangsan. Conserve the path to Daehan, a man of Korea, Mugunghwa, Samcheonri, Gorgeous, and Gorgeous. Conserve the path to Daehan, a man of Mugunghwa, Samcheonri, Gorgeous Gangsan"
        }
    },
    ch: {
        translation: {
            main: "上帝保佑东海水和 白头山 干燥、磨损, 我国万岁、无穷花、三千里、华丽江山、大韩人, 道路保全。 南山上像披着松铁甲一样, 风霜不变, 我们气象万岁、无穷花、三千里、华丽江山大韩人, 道路保全。 秋天的天空空旷, 高空无云的明月, 我们心中一心一意, 木槿花、三千里华丽江山大韩人。 我们气象和妈妈用忠心来守护忠城。"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ko", 
        interpolation: {
            escapeValue: false 
        }
    });

export default i18n;