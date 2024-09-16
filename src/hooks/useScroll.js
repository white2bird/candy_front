import { ref, onBeforeUnmount } from 'vue';
// import scrollIntoView from 'smooth-scroll-into-view-if-needed';
 
export default function useScroll(navList) {
    const navCurrent = ref(navList[0]?.value);
    navCurrent.value = navList[0]?.value;
    const isFixed = ref(false);
 
    const scrollNav = (sections) => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // 滚动条偏移量
        // 导航吸顶
        const weTabs = document.querySelector('.wd-tabs').offsetTop;
        isFixed.value = scrollTop >= weTabs;
        sections.forEach((item, index) => {
            if (item.offsetTop - 100 <= scrollTop) {
                navCurrent.value = navList[index].value;
            }
        });
    };
 
    const navigate = (tab) => {
        navCurrent.value = tab;
        const node = document.querySelector(`.${tab}`);
        scrollIntoView(node, {
            scrollMode: 'if-needed',
            block: 'start',
            inline: 'nearest',
        });
    };
 
    document.onscroll = () => {
        scrollNav(document.querySelectorAll('.scroll-item'));
    };
    onBeforeUnmount(() => {
        document.onscroll = '';
    });
    return {
        isFixed,
        navCurrent,
        navigate,
        scrollNav,
    };
}