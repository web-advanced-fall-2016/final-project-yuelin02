'use strict';var _templateObject = _taggedTemplateLiteral(['\n                    <img class = "thumb" src="', '', '" data-id="', '">\n                    '], ['\n                    <img class = "thumb" src="', '', '" data-id="', '">\n                    ']);function _taggedTemplateLiteral(strings, raw) {return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));}(function () {
    var baseURL = "http://148.75.251.185:8888";
    var contentWrapper = document.querySelector('.content');
    var myModal = document.querySelector('.modal');

    if (document.readyState != "loading") {
        app();
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            app();
        }, false);
    }

    //display the students' profile thumbnail
    function getStudentThumb() {
        $.ajax({
            method: "GET",
            url: baseURL + '/students' }).
        done(function (response) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
                for (var _iterator = response[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var student = _step.value;
                    $.ajax({
                        method: 'GET',
                        url: baseURL + '/students/' + student.id }).
                    done(function (res) {
                        // console.log(res.profilepicture);
                        var thumbTemp = document.createElement('div');
                        thumbTemp.classList.add('person');
                        T(_templateObject,
                        baseURL, res.profile_picture, res.id);

                        contentWrapper.appendChild(thumbTemp);
                    });
                }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
        });
    }

    // handle click event, give full profile of the student
    function getProfile(student) {
        contentWrapper.addEventListener('click', function (evnt) {
            if (evnt.target.classList.contains('thumb')) {
                $.ajax({
                    method: "GET",
                    url: baseURL + '/students/' + evnt.target.dataset.id }).
                done(function (res) {
                    var profileTemp = document.createElement('div');
                    profileTemp.classList.add('profile');
                    profileTemp.innerHTML = '\n                    <div class = "closeIcon">X</div>\n                    <div class="pic">\n                    <img src="' +


                    baseURL + res.profile_picture + '">\n                    </div>\n                    <div class="name">\n                    <h3>' +


                    res.first_name + ' ' + res.last_name + '</h3>\n                    </div>\n                    <div class="email">\n                    <p>' +


                    res.email + '</p>\n                    </div>\n                    <div class="description">\n                    l\n                    </div>\n                    ';





                    myModal.appendChild(profileTemp);
                    myModal.style.display = "block";
                    closeModal(profileTemp);
                });
            }
        });
    }

    function closeModal(tab) {
        myModal.onclick = function (evnt) {
            console.log(evnt.target);
            if (evnt.target === this || evnt.target.classList.contains('closeIcon')) {
                if (myModal.style.display === "block") {
                    myModal.style.display = "none";
                    myModal.removeChild(tab);
                    // myModal.sibilingNo
                }
            }
        };
    }

    function app() {
        getStudentThumb();
        // let modal = new SimpleModal('mymodal');
        getProfile();
    }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYmFzZVVSTCIsImNvbnRlbnRXcmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXlNb2RhbCIsInJlYWR5U3RhdGUiLCJhcHAiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0U3R1ZGVudFRodW1iIiwiJCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkb25lIiwicmVzcG9uc2UiLCJzdHVkZW50IiwiaWQiLCJyZXMiLCJ0aHVtYlRlbXAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiVCIsInByb2ZpbGVfcGljdHVyZSIsImFwcGVuZENoaWxkIiwiZ2V0UHJvZmlsZSIsImV2bnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImRhdGFzZXQiLCJwcm9maWxlVGVtcCIsImlubmVySFRNTCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInN0eWxlIiwiZGlzcGxheSIsImNsb3NlTW9kYWwiLCJ0YWIiLCJvbmNsaWNrIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoibVpBQUEsQ0FBQyxZQUFZO0FBQ1QsUUFBSUEsVUFBVSw0QkFBZDtBQUNBLFFBQUlDLGlCQUFpQkMsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFyQjtBQUNBLFFBQUlDLFVBQVVGLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxRQUFJRCxTQUFTRyxVQUFULElBQXVCLFNBQTNCLEVBQXNDO0FBQ2xDQztBQUNILEtBRkQsTUFFTztBQUNISixpQkFBU0ssZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDdEREO0FBQ0gsU0FGRCxFQUVHLEtBRkg7QUFHSDs7QUFFRDtBQUNBLGFBQVNFLGVBQVQsR0FBMEI7QUFDdEJDLFVBQUVDLElBQUYsQ0FBTztBQUNIQyxvQkFBUSxLQURMO0FBRUhDLGlCQUFRWixPQUFSLGNBRkcsRUFBUDtBQUdHYSxZQUhILENBR1EsVUFBVUMsUUFBVixFQUFvQjtBQUN4QixxQ0FBb0JBLFFBQXBCLDhIQUE4QixLQUFyQkMsT0FBcUI7QUFDMUJOLHNCQUFFQyxJQUFGLENBQU87QUFDSEMsZ0NBQVEsS0FETDtBQUVIQyw2QkFBUVosT0FBUixrQkFBNEJlLFFBQVFDLEVBRmpDLEVBQVA7QUFHR0gsd0JBSEgsQ0FHUSxVQUFTSSxHQUFULEVBQWE7QUFDakI7QUFDQSw0QkFBSUMsWUFBWWhCLFNBQVNpQixhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0FELGtDQUFVRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixRQUF4QjtBQUNBQztBQUM0QnRCLCtCQUQ1QixFQUNzQ2lCLElBQUlNLGVBRDFDLEVBQ3VFTixJQUFJRCxFQUQzRTs7QUFHQWYsdUNBQWV1QixXQUFmLENBQTJCTixTQUEzQjtBQUNILHFCQVhEO0FBWUgsaUJBZHVCO0FBZTNCLFNBbEJEO0FBbUJIOztBQUVEO0FBQ0EsYUFBU08sVUFBVCxDQUFvQlYsT0FBcEIsRUFBNkI7QUFDekJkLHVCQUFlTSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFVbUIsSUFBVixFQUFnQjtBQUNyRCxnQkFBR0EsS0FBS0MsTUFBTCxDQUFZUCxTQUFaLENBQXNCUSxRQUF0QixDQUErQixPQUEvQixDQUFILEVBQTJDO0FBQ3ZDbkIsa0JBQUVDLElBQUYsQ0FBTztBQUNIQyw0QkFBTyxLQURKO0FBRUhDLHlCQUFRWixPQUFSLGtCQUE0QjBCLEtBQUtDLE1BQUwsQ0FBWUUsT0FBWixDQUFvQmIsRUFGN0MsRUFBUDtBQUdHSCxvQkFISCxDQUdRLFVBQVNJLEdBQVQsRUFBYTtBQUNqQix3QkFBSWEsY0FBYzVCLFNBQVNpQixhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FXLGdDQUFZVixTQUFaLENBQXNCQyxHQUF0QixDQUEwQixTQUExQjtBQUNBUyxnQ0FBWUMsU0FBWjs7O0FBR1kvQiwyQkFIWixHQUdzQmlCLElBQUlNLGVBSDFCOzs7QUFNTU4sd0JBQUllLFVBTlYsU0FNd0JmLElBQUlnQixTQU41Qjs7O0FBU0toQix3QkFBSWlCLEtBVFQ7Ozs7OztBQWVBOUIsNEJBQVFvQixXQUFSLENBQW9CTSxXQUFwQjtBQUNBMUIsNEJBQVErQixLQUFSLENBQWNDLE9BQWQsR0FBd0IsT0FBeEI7QUFDQUMsK0JBQVdQLFdBQVg7QUFDSCxpQkF4QkQ7QUF5Qkg7QUFDSixTQTVCRDtBQTZCSDs7QUFFRCxhQUFTTyxVQUFULENBQW9CQyxHQUFwQixFQUF3QjtBQUNwQmxDLGdCQUFRbUMsT0FBUixHQUFrQixVQUFTYixJQUFULEVBQWU7QUFDN0JjLG9CQUFRQyxHQUFSLENBQVlmLEtBQUtDLE1BQWpCO0FBQ0EsZ0JBQUlELEtBQUtDLE1BQUwsS0FBZ0IsSUFBaEIsSUFBd0JELEtBQUtDLE1BQUwsQ0FBWVAsU0FBWixDQUFzQlEsUUFBdEIsQ0FBK0IsV0FBL0IsQ0FBNUIsRUFBd0U7QUFDcEUsb0JBQUl4QixRQUFRK0IsS0FBUixDQUFjQyxPQUFkLEtBQTBCLE9BQTlCLEVBQXVDO0FBQ25DaEMsNEJBQVErQixLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDQWhDLDRCQUFRc0MsV0FBUixDQUFvQkosR0FBcEI7QUFDQTtBQUNIO0FBQ0o7QUFDSixTQVREO0FBVUg7O0FBRUQsYUFBU2hDLEdBQVQsR0FBZTtBQUNYRTtBQUNBO0FBQ0FpQjtBQUNIO0FBQ0osQ0F2RkQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGJhc2VVUkwgPSBcImh0dHA6Ly8xNDguNzUuMjUxLjE4NTo4ODg4XCI7XG4gICAgbGV0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBsZXQgbXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgYXBwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFwcCgpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy9kaXNwbGF5IHRoZSBzdHVkZW50cycgcHJvZmlsZSB0aHVtYm5haWxcbiAgICBmdW5jdGlvbiBnZXRTdHVkZW50VGh1bWIoKXtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIHVybDogYCR7YmFzZVVSTH0vc3R1ZGVudHNgXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzdHVkZW50IG9mIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtiYXNlVVJMfS9zdHVkZW50cy8ke3N0dWRlbnQuaWR9YFxuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLnByb2ZpbGVwaWN0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRodW1iVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYlRlbXAuY2xhc3NMaXN0LmFkZCgncGVyc29uJyk7XG4gICAgICAgICAgICAgICAgICAgIFRgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3MgPSBcInRodW1iXCIgc3JjPVwiJHtiYXNlVVJMfSR7cmVzLnByb2ZpbGVfcGljdHVyZX1cIiBkYXRhLWlkPVwiJHtyZXMuaWR9XCI+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRodW1iVGVtcCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBjbGljayBldmVudCwgZ2l2ZSBmdWxsIHByb2ZpbGUgb2YgdGhlIHN0dWRlbnRcbiAgICBmdW5jdGlvbiBnZXRQcm9maWxlKHN0dWRlbnQpIHtcbiAgICAgICAgY29udGVudFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZudCkge1xuICAgICAgICAgICAgaWYoZXZudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0aHVtYicpKXtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6XCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtiYXNlVVJMfS9zdHVkZW50cy8ke2V2bnQudGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2ZpbGVUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVUZW1wLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZVRlbXAuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjbG9zZUljb25cIj5YPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Jhc2VVUkx9JHtyZXMucHJvZmlsZV9waWN0dXJlfVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPiR7cmVzLmZpcnN0X25hbWV9ICR7cmVzLmxhc3RfbmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBsXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICBteU1vZGFsLmFwcGVuZENoaWxkKHByb2ZpbGVUZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgbXlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKHByb2ZpbGVUZW1wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCh0YWIpe1xuICAgICAgICBteU1vZGFsLm9uY2xpY2sgPSBmdW5jdGlvbihldm50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldm50LnRhcmdldCk7XG4gICAgICAgICAgICBpZiggZXZudC50YXJnZXQgPT09IHRoaXMgfHwgZXZudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZUljb24nKSl7XG4gICAgICAgICAgICAgICAgaWYgKG15TW9kYWwuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIG15TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICBteU1vZGFsLnJlbW92ZUNoaWxkKHRhYik7XG4gICAgICAgICAgICAgICAgICAgIC8vIG15TW9kYWwuc2liaWxpbmdOb1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcCgpIHtcbiAgICAgICAgZ2V0U3R1ZGVudFRodW1iKCk7XG4gICAgICAgIC8vIGxldCBtb2RhbCA9IG5ldyBTaW1wbGVNb2RhbCgnbXltb2RhbCcpO1xuICAgICAgICBnZXRQcm9maWxlKCk7XG4gICAgfVxufSkoKTtcblxuIl19
