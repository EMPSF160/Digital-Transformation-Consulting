/* ==========================================================================
   NEXUS CONSULTING - Light Mode Theme Manager
   ========================================================================== */

(function () {
    function applyTheme() {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }

    document.addEventListener('DOMContentLoaded', () => {
        applyTheme();
    });

    window.nexusTheme = {
        applyTheme
    };
})();
