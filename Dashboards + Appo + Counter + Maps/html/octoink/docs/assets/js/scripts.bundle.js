"use strict";

//=> Class Definition
var AppConfig = AppConfig || {};

// Global variables
var $loader = $('#loader');
var $wrapper = $('#wrapper');
var $header = $('#header');

$(function () {
    AppConfig = {
        //=> Initialize function to call all functions of the class
        init: function () {
            AppConfig.initAppScrollbars();
            AppConfig.navSidebar();
            AppConfig.sidebarScrollbar();
            AppConfig.toggleSidebar();
            AppConfig.toggleHeaderOptions();
            AppConfig.toggleSearch();
            AppConfig.rightSidebar();
        },

        //=> Initialize app scrollbars
        initAppScrollbars: function () {
            $('[data-scrollable="true"]').each(function () {
                var $this = $(this);
                var height = $this.data('height');
                if (height) {
                    $this.css('max-height', height);
                }
                AppConfig.initPerfectScrollbar(this);
            });
        },

        //=> Initialize ps scrollbar
        initPerfectScrollbar: function (element) {
            var ps = new PerfectScrollbar(element, {
                wheelSpeed: 0.5,
                wheelPropagation: false,
                minScrollbarLength: 40
            });
        },

        //=> Sidebar open close sub menu
        navSidebar: function () {
            var $navLink = $('.sidebar-nav_has-sub > .sidebar-nav_item-link');
            $('.sidebar-nav').find('.show > .sidebar-nav_sub-menu').slideDown(350);

            $navLink.on('click', function (e) {
                e.stopPropagation();
                var $this = $(this);

                if ($this.parent().hasClass(show)) {
                    $this.parent().removeClass(show);
                    $this.next().slideUp(350);
                } else {
                    $this.parent().parent().find('.show > .sidebar-nav_sub-menu').slideUp(350);
                    $('.sidebar-nav_has-sub').removeClass(show);
                    $this.parent().addClass(show);
                    $this.next().slideToggle(350);
                }
            });
        },

        //=> Initialize sidebar scrolling
        sidebarScrollbar: function () {
            var fixedSidebar = 'fixed-sidebar';
            if ($body.hasClass(fixedSidebar) || $(window).width() <= appUtils.breakpoints('lg')) {
                AppConfig.initPerfectScrollbar('#sidebar');
            }
        },

        //=> Toggle sidebar
        toggleSidebar: function () {
            var $hamburger = $('#hamburger');
            $hamburger.on('click', function () {
                $body.toggleClass('hide-sidebar');
                $(this).toggleClass(active);
            });
        },

        //=> Toggle header options
        toggleHeaderOptions: function () {
            var $headerOptionsButton = $('#openHeaderOptions');
            var $headerOptions = $('.header-options');
            $headerOptionsButton.on('click', function () {
                $headerOptions.toggleClass(show);
            });
        },

        //=> Toggle search in ipad and mobile
        toggleSearch: function () {
            var $searchIcon = $('.search-icon');
            var $searchInput = $('.search-input');
            var $closeSearch = $('#closeSearch');

            $searchIcon.on('click', function () {
                $searchInput.addClass(show);
            });
            $closeSearch.on('click', function () {
                $searchInput.removeClass(show);
            })
        },

        rightSidebar: function () {
            var $openRightSidebar = $('#openRightSidebar');
            var $closeSidebar = $('#closeSidebar');
            var $rightSide = $('#rightSide');
            var overlay = '<div id="overlay"></div>';

            $openRightSidebar.on('click', function () {
                $rightSide.addClass(show);
                $body.append(overlay);
            });
            $closeSidebar.on('click', function () {
                $rightSide.removeClass(show);
                $('body #overlay').remove();
            });
        }
    };

    var $body = $('body');
    var active = 'active';
    var show = 'show';

    //=> Call class at document ready
    $(document).ready(AppConfig.init);
});

//=> Loader
$(window).on('load', function () {
    $loader.fadeOut(1000);
});

//=> On scroll add class scrolled on header
$wrapper.on("scroll", function() {
    $header.toggleClass('scrolled', $(this).scrollTop() > 80);
});

"use strict";

//=> Class Definition
var Base = Base || {};

$(function () {
    Base = {
        //=> Initialize function to call all functions of the class
        init: function () {
            Base.initTheme();
            Base.initDataFunction();
            Base.collapseActive();
        },

        //=> Initialize theme settings
        initTheme: function () {
            $('body').themeSettings();
        },

        //=> Add active class on collapse
        collapseActive: function () {
            var $collapse = $(".collapse");
            $collapse.on('shown.bs.collapse', function () {
                $(this).prev().addClass('active');
            });
            $collapse.on('hidden.bs.collapse', function () {
                $(this).prev().removeClass('active');
            });
        },

        //=> Init data function
        initDataFunction: function () {
            var $dataTooltip = $('[data-tooltip="tooltip"]');
            var $dataPopover = $('[data-popover="popover"]');

            if ($dataTooltip.length) {
                $dataTooltip.tooltip();
            }
            if ($dataPopover.length) {
                $dataPopover.popover();
            }
        },
    };

    //=> Call class at document ready
    $(document).ready(Base.init);
});
/**
 * Theme Settings v1.0.0
 * Copyright 2019 Kri8thm
 * Licensed under MIT
 *------------------------------------*/

;(function($, window, document, undefined) {

    function Theme(element, options) {

        this.$body = $('body');

        /*
         * Theme settings options
         */
        this.options = $.extend({}, Theme.Defaults, options);

        /*
         * Options to store in cookies
         */
        this.cookiesOptions = {
            'fixedHeader': this.options.fixedHeader,
            'fixedSidebar': this.options.fixedSidebar,
            'darkSidebar': this.options.darkSidebar,
            'iconicSidebar': this.options.iconicSidebar,
            'sidebar': this.options.sidebar
        };

        this.classes = {
            'fixedHeader': 'fixed-header',
            'fixedSidebar': 'fixed-sidebar',
            'darkSidebar': 'dark-sidebar',
            'iconicSidebar': 'iconic-sidebar',
        }

        /*
         * Get cookies of app and set on options
         */
        if ($.cookie('themeSetting') != null && options === false) {
            this.cookiesOptions = JSON.parse($.cookie('themeSetting'));
            this.options.fixedHeader = this.cookiesOptions.fixedHeader;
            this.options.fixedSidebar = this.cookiesOptions.fixedSidebar;
            this.options.darkSidebar = this.cookiesOptions.darkSidebar;
            this.options.iconicSidebar = this.cookiesOptions.iconicSidebar;
            this.options.sidebar = this.cookiesOptions.sidebar;
        }

        /*
         * Count for checkbox
         */
        this.optionList = [
            {
                'text': 'Fixed header',
                'value': this.options.fixedHeader
            },
            {
                'text': 'Fixed sidebar',
                'value': this.options.fixedSidebar
            },
            /*{
                'text': 'Dark sidebar',
                'value': this.options.darkSidebar
            },*/
            {
                'text': 'Iconic sidebar',
                'value': this.options.iconicSidebar
            }
        ];

        this.initialize();
    }

    /**
     * Default options for the theme.
     * @public
     */
    Theme.Defaults = {
        fixedHeader: false,
        fixedSidebar: false,
        darkSidebar: false,
        iconicSidebar: false,

        sidebar: 4,
        sidebarClasses: ['primary', 'danger', 'success', 'warning', 'info', 'brand', 'dark'],

        settingsButton: 'button',
        settingsButtonId: 'customSettings',
        settingsButtonClass: 'btn btn-pill btn-air btn-brand btn-only-icon',
        settingIcon: '<i class="ion-md-settings fa-spin"></i>',

        itemElement: 'div',
        wrapperId: 'settingsWrapper',

        listClass: 'mb-3',
        listItemClass: 'mb-2 d-flex align-items-center'
    };

    /**
     * Initializes the theme settings.
     * @protected
     */
    Theme.prototype.initialize = function() {
        if (this.options.fixedHeader) {
            this.$body.addClass(this.classes.fixedHeader);
        }
        if (this.options.fixedSidebar) {
            this.$body.addClass(this.classes.fixedSidebar);
            AppConfig.sidebarScrollbar();
        }
        if (this.options.darkSidebar) {
            this.$body.addClass(this.classes.darkSidebar);
        }
        if (this.options.iconicSidebar) {
            this.$body.addClass(this.classes.iconicSidebar);
        }
        $('#sidebar').addClass('sidebar-' + this.options.sidebarClasses[this.options.sidebar]);
        this.settingsButtonElement();
        this.skinClicks();
    };

    /**
     * Add theme settings button.
     * @protected
     */
    Theme.prototype.settingsButtonElement = function() {
        var attributes = {
            'type': 'button',
            'id': this.options.settingsButtonId,
            'className': this.options.settingsButtonClass
        };

        var btnElement = document.createElement(this.options.settingsButton);
        Object.assign(btnElement, attributes);
        btnElement.innerHTML = this.options.settingIcon;
        this.$body.append(btnElement);
        this.themeOptions();
    };

    /**
     * Add theme settings options.
     * @protected
     */
    Theme.prototype.themeOptions = function() {
        var wrapperElement = document.createElement(this.options.itemElement);
        wrapperElement.setAttribute('id', this.options.wrapperId);

        var header = '<header>' +
            '<span class="font-medium font-md text-white">Theme Settings</span>' +
            '<a href="javascript:void(0)" class="ml-auto"><i class="ion-md-close"></i></a>' +
            '</header>';

        var body = '<div class="theme-settings-body"><ul class="' + this.options.listClass + '">';

        for (var i = 0; i < this.optionList.length; i++) {
            var checked = this.optionList[i].value ? 'checked' : '';

            body += '<li class="' + this.options.listItemClass + '">' +
                '<label for="to' + i + '">' + this.optionList[i].text + '</label>' +
                '<div class="switch switch-pill switch-outline-primary ml-auto">' +
                '<input type="checkbox" id="to' + i + '" '+ checked +'>' +
                '<label for="to' + i + '"></label>' +
                '</div>' +
                '</li>';
        }

        body += '<li class=""></li>' +
            '<li class="font-medium text-dark mb-2">Sidebar Colors</li>' +
            '<li class="' + this.options.listItemClass + '">';

        for (var j = 0; j < this.options.sidebarClasses.length; j++) {
            var activeClass = j === this.options.sidebar ? 'active' : '';
            body += '<a href="javascript:void(0);" class="sidebar-skin bg-' + this.options.sidebarClasses[j] + ' ' + activeClass + '" ' +
                'data-sidebar-skin="' + j + '"></a>'
        }

        body += '</li>';

        body += '</ul></div>';

        wrapperElement.innerHTML = header + body;
        this.$body.append(wrapperElement);
    };

    /**
     * App click events.
     * @protected
     */
    Theme.prototype.skinClicks = function() {
        var _this = this;
        var settings = '#' + _this.options.settingsButtonId;
        var $wrapper = $('#' + _this.options.wrapperId);
        var $sidebar = $('#sidebar');
        var $sidebarSkin = $('.sidebar-skin');

        this.$body.on('click', '#to0', function () {
            var $this = $(this);
            _this.cookiesOptions.fixedHeader = $this[0].checked;
            _this.$body.toggleClass(_this.classes.fixedHeader);
            _this.setCookies();
        });

        this.$body.on('click', '#to1', function () {
            var $this = $(this);
            _this.cookiesOptions.fixedSidebar = $this[0].checked;
            _this.$body.toggleClass(_this.classes.fixedSidebar);
            location.reload();
            _this.setCookies();
        });

        this.$body.on('click', '#to2', function () {
            var $this = $(this);
            _this.cookiesOptions.darkSidebar = $this[0].checked;
            _this.$body.toggleClass(_this.classes.darkSidebar);
            _this.setCookies();
        });

        this.$body.on('click', '#to3', function () {
            var $this = $(this);
            _this.cookiesOptions.iconicSidebar = $this[0].checked;
            _this.$body.toggleClass(_this.classes.iconicSidebar);
            _this.setCookies();
        });

        this.$body.on('click', '.sidebar-skin', function () {
            var $this = $(this);
            var sidebarSkin = $this.data('sidebar-skin');
            _this.cookiesOptions.sidebar = sidebarSkin;
            $sidebar.removeClass();
            $sidebar.addClass('sidebar-' + _this.options.sidebarClasses[sidebarSkin]);
            $sidebarSkin.removeClass('active');
            $this.addClass('active');
            _this.setCookies();
        });

        this.$body.on('click', settings, function () {
            $wrapper.toggleClass('open-settings');
        });

        this.$body.on('click', 'header a', function () {
            $wrapper.removeClass('open-settings');
        });
    };

    /**
     * Set app cookies.
     * @protected
     */
    Theme.prototype.setCookies = function() {
        $.cookie('themeSetting', JSON.stringify(this.cookiesOptions), { expires: 7, path: '/' });
    };

    /**
     * The jQuery Plugin for the Theme Setting
     * @public
     */
    $.fn.themeSettings = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = new Theme(this, typeof option === 'object' && option);
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.themeSettings.Constructor = Theme;

})(jQuery, window, document);
 "use strict";

//=> Class Definition
var appUtils = appUtils || {};

$(function () {
    appUtils = {

        GOOGLE_API_KEY: 'AIzaSyAmOcUK0pgT3lW3Cr9LoeCVGIrm1_qFq30',

        // Chart js global variables
        CHART_GRID_LINE_COLOR: '#E4E9EC',
        CHART_JS_AXES_PADDING: 10,
        CHART_JS_BORDER_DASH: [8, 8],

        /*!
         * Colors function return app colors
         * @color
         *---------------------------------------------------*/
        colors: function (color) {
            if (color && colors[color]) {
                return colors[color];
            }
        },

        /*!
         * Breakpoints function return app breakpoint value
         * @breakpoint
         *---------------------------------------------------*/
        breakpoints: function(breakpoint) {
            if (breakpoint && breakpoints[breakpoint]) {
                return breakpoints[breakpoint];
            }
        },

        /*!
         * Datepicker arrows function return arrow template
         *---------------------------------------------------*/
        datepickerArrows: function () {
            return {
                leftArrow: '<i class="ion-ios-arrow-back"></i>',
                rightArrow: '<i class="ion-ios-arrow-forward"></i>'
            };
        },

        /*!
         * Timepicker arrows function return arrow template
         *---------------------------------------------------*/
        timepickerArrows: function () {
            return {
                up: 'ion-ios-arrow-up',
                down: 'ion-ios-arrow-down'
            };
        }
    };

    //=> Utils variables
    var colors = {
        primary:    '#6E21EB',
        secondary:  '#838A8E',
        brand:      '#4E32EC',
        success:    '#21D46C',
        info:       '#2190F1',
        warning:    '#FDBB1F',
        danger:     '#E62525',
        light:      '#D7DEE2',
        dark:       '#101112'
    };

    var breakpoints = {
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
        xs: 0
    };
});
