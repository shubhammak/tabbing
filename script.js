(function () {

    class Tabbing {
        TabContainerClass = "";
        TabContentClass = "";
        Current = '';
        constructor(TabContainerClass, TabContentClass) {
            this.TabContainerClass = TabContainerClass;
            this.TabContentClass = TabContentClass;
            this.init();
            this.EventOccur();
        }

        init() {
            var tabContainer = document.querySelectorAll(this.TabContainerClass);
            var tabContent = document.querySelectorAll(this.TabContentClass);
            for (let index = 0; index < tabContainer[0].children.length; index++) {
                if (index === 0) {
                    tabContainer[0].children[index].classList.add('active');
                } else {
                    tabContainer[0].children[index].classList.remove('active');
                }
            }
            for (let index = 0; index < tabContent.length; index++) {
                if (index === 0) {
                    tabContent[index].classList.add('active');
                } else {
                    tabContent[index].classList.remove('active');
                }
            }
        }


        EventOccur() {
            var Current = this;
            var tabClick = document.querySelectorAll(this.TabContainerClass + ' li');
            for (let index = 0; index < tabClick.length; index++) {
                tabClick[index].addEventListener('click', function () {
                    Current.resetActiveClass();
                    Current.clickEvent(this);
                });
            }
        }

        clickEvent(ele) {
            var contentTabId = ele.getAttribute('tab-id')
            ele.classList.add('active');
            this.setTabContent(contentTabId);
        }

        resetActiveClass() {
            var tabClick = document.querySelectorAll(this.TabContainerClass + ' li');
            for (let index = 0; index < tabClick.length; index++) {
                tabClick[index].classList.remove('active');
            }

            var tabContent = document.querySelectorAll(this.TabContentClass);
            for (let index = 0; index < tabContent.length; index++) {
                tabContent[index].classList.remove('active');
            }
        }

        setTabContent(tabId) {
            var ActiveTabContent = 'content-' + tabId;
            var tabContent = document.querySelectorAll(this.TabContentClass);
            for (let index = 0; index < tabContent.length; index++) {
                if (tabContent[index].getAttribute('tab-id') === ActiveTabContent) {
                    tabContent[index].classList.add('active');
                }
            }
        }


    }

    window.addEventListener('load', new Tabbing('.dk_tabs_list', '.dk_tab_content'));

}());