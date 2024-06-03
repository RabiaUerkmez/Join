/**
 * Generates HTML content for displaying detailed information about a contact.
 * @param {string} name - The name of the contact.
 * @param {string} mail - The email address of the contact.
 * @param {string} number - The phone number of the contact.
 * @param {string} bg - The background color for the contact's initial circle.
 * @param {string} initials - The initials of the contact.
 * @param {number} i - The index of the contact in the contacts list.
 * @returns {string} HTML content for the contact's detailed information.
 */
function generateHTMLshowContact(name, mail, number, bg, initials, i) {
    return /*html*/ ` 
    <div class="contanctsHeader">
    <div class="initialCircleXL" style="border: 6px solid white; background-color: ${bg};">${initials}</div>
    <div class="contactWrapper">
        <div class="fullNameSelectedWrapper">
            <p class="fullNameSelected">${name}</p>
        </div>
        <div class="settings">
            <div class="edit" onclick="editContact('${name}', '${mail}', '${number}', '${bg}', '${initials}', ${i})">
                <svg width="62" height="24" viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_5_276" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_5_276)">
                        <path
                            d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z"
                            fill="#2A3647"
                        />
                    </g>
                    <path
                        d="M33.4091 17.5V5.86364H40.4318V7.11364H34.8182V11.0455H40.0682V12.2955H34.8182V16.25H40.5227V17.5H33.4091ZM46.0852 17.6818C45.358 17.6818 44.7159 17.4981 44.1591 17.1307C43.6023 16.7595 43.1667 16.2367 42.8523 15.5625C42.5379 14.8845 42.3807 14.0833 42.3807 13.1591C42.3807 12.2424 42.5379 11.447 42.8523 10.7727C43.1667 10.0985 43.6042 9.57765 44.1648 9.21023C44.7254 8.8428 45.3731 8.65909 46.108 8.65909C46.6761 8.65909 47.125 8.75379 47.4545 8.94318C47.7879 9.12879 48.0417 9.34091 48.2159 9.57955C48.3939 9.81439 48.5322 10.0076 48.6307 10.1591H48.7443V5.86364H50.0852V17.5H48.7898V16.1591H48.6307C48.5322 16.3182 48.392 16.5189 48.2102 16.7614C48.0284 17 47.7689 17.214 47.4318 17.4034C47.0947 17.589 46.6458 17.6818 46.0852 17.6818ZM46.267 16.4773C46.8049 16.4773 47.2595 16.3371 47.6307 16.0568C48.0019 15.7727 48.2841 15.3807 48.4773 14.8807C48.6705 14.3769 48.767 13.7955 48.767 13.1364C48.767 12.4848 48.6723 11.9148 48.483 11.4261C48.2936 10.9337 48.0133 10.5511 47.642 10.2784C47.2708 10.0019 46.8125 9.86364 46.267 9.86364C45.6989 9.86364 45.2254 10.0095 44.8466 10.3011C44.4716 10.589 44.1894 10.9811 44 11.4773C43.8144 11.9697 43.7216 12.5227 43.7216 13.1364C43.7216 13.7576 43.8163 14.322 44.0057 14.8295C44.1989 15.3333 44.483 15.7348 44.858 16.0341C45.2367 16.3295 45.7064 16.4773 46.267 16.4773ZM52.7273 17.5V8.77273H54.0682V17.5H52.7273ZM53.4091 7.31818C53.1477 7.31818 52.9223 7.22917 52.733 7.05114C52.5473 6.87311 52.4545 6.65909 52.4545 6.40909C52.4545 6.15909 52.5473 5.94508 52.733 5.76705C52.9223 5.58902 53.1477 5.5 53.4091 5.5C53.6705 5.5 53.8939 5.58902 54.0795 5.76705C54.2689 5.94508 54.3636 6.15909 54.3636 6.40909C54.3636 6.65909 54.2689 6.87311 54.0795 7.05114C53.8939 7.22917 53.6705 7.31818 53.4091 7.31818ZM60.3196 8.77273V9.90909H55.7969V8.77273H60.3196ZM57.1151 6.68182H58.456V15C58.456 15.3788 58.5109 15.6629 58.6207 15.8523C58.7344 16.0379 58.8783 16.1629 59.0526 16.2273C59.2306 16.2879 59.4181 16.3182 59.6151 16.3182C59.7628 16.3182 59.884 16.3106 59.9787 16.2955C60.0734 16.2765 60.1491 16.2614 60.206 16.25L60.4787 17.4545C60.3878 17.4886 60.2609 17.5227 60.098 17.5568C59.9351 17.5947 59.7287 17.6136 59.4787 17.6136C59.0999 17.6136 58.7287 17.5322 58.3651 17.3693C58.0052 17.2064 57.706 16.9583 57.4673 16.625C57.2325 16.2917 57.1151 15.8712 57.1151 15.3636V6.68182Z"
                        fill="#2A3647"
                    />
                </svg>
            </div>
            <div class="delete" onclick="deleteContact(${i})">
                <svg width="81" height="24" viewBox="0 0 81 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_5_274" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g class="pointer" mask="url(#mask0_5_274)">
                        <path
                            d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM7 6V19H17V6H7ZM9 16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16ZM13 16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16Z"
                            fill="#2A3647"
                        />
                    </g>
                    <path
                        d="M37 17.5H33.4091V5.86364H37.1591C38.2879 5.86364 39.2538 6.09659 40.0568 6.5625C40.8598 7.02462 41.4754 7.68939 41.9034 8.55682C42.3314 9.42045 42.5455 10.4545 42.5455 11.6591C42.5455 12.8712 42.3295 13.9148 41.8977 14.7898C41.4659 15.661 40.8371 16.3314 40.0114 16.8011C39.1856 17.267 38.1818 17.5 37 17.5ZM34.8182 16.25H36.9091C37.8712 16.25 38.6686 16.0644 39.3011 15.6932C39.9337 15.322 40.4053 14.7936 40.7159 14.108C41.0265 13.4223 41.1818 12.6061 41.1818 11.6591C41.1818 10.7197 41.0284 9.91098 40.7216 9.23295C40.4148 8.55114 39.9564 8.02841 39.3466 7.66477C38.7367 7.29735 37.9773 7.11364 37.0682 7.11364H34.8182V16.25ZM48.3864 17.6818C47.5455 17.6818 46.8201 17.4962 46.2102 17.125C45.6042 16.75 45.1364 16.2273 44.8068 15.5568C44.4811 14.8826 44.3182 14.0985 44.3182 13.2045C44.3182 12.3106 44.4811 11.5227 44.8068 10.8409C45.1364 10.1553 45.5947 9.62121 46.1818 9.23864C46.7727 8.85227 47.4621 8.65909 48.25 8.65909C48.7045 8.65909 49.1534 8.73485 49.5966 8.88636C50.0398 9.03788 50.4432 9.28409 50.8068 9.625C51.1705 9.96212 51.4602 10.4091 51.6761 10.9659C51.892 11.5227 52 12.2083 52 13.0227V13.5909H45.2727V12.4318H50.6364C50.6364 11.9394 50.5379 11.5 50.3409 11.1136C50.1477 10.7273 49.8712 10.4223 49.5114 10.1989C49.1553 9.97538 48.7348 9.86364 48.25 9.86364C47.7159 9.86364 47.2538 9.99621 46.8636 10.2614C46.4773 10.5227 46.1799 10.8636 45.9716 11.2841C45.7633 11.7045 45.6591 12.1553 45.6591 12.6364V13.4091C45.6591 14.0682 45.7727 14.6269 46 15.0852C46.2311 15.5398 46.5511 15.8864 46.9602 16.125C47.3693 16.3598 47.8447 16.4773 48.3864 16.4773C48.7386 16.4773 49.0568 16.428 49.3409 16.3295C49.6288 16.2273 49.8769 16.0758 50.0852 15.875C50.2936 15.6705 50.4545 15.4167 50.5682 15.1136L51.8636 15.4773C51.7273 15.9167 51.4981 16.303 51.1761 16.6364C50.8542 16.9659 50.4564 17.2235 49.983 17.4091C49.5095 17.5909 48.9773 17.6818 48.3864 17.6818ZM55.3807 5.86364V17.5H54.0398V5.86364H55.3807ZM61.4957 17.6818C60.6548 17.6818 59.9295 17.4962 59.3196 17.125C58.7135 16.75 58.2457 16.2273 57.9162 15.5568C57.5904 14.8826 57.4276 14.0985 57.4276 13.2045C57.4276 12.3106 57.5904 11.5227 57.9162 10.8409C58.2457 10.1553 58.7041 9.62121 59.2912 9.23864C59.8821 8.85227 60.5715 8.65909 61.3594 8.65909C61.8139 8.65909 62.2628 8.73485 62.706 8.88636C63.1491 9.03788 63.5526 9.28409 63.9162 9.625C64.2798 9.96212 64.5696 10.4091 64.7855 10.9659C65.0014 11.5227 65.1094 12.2083 65.1094 13.0227V13.5909H58.3821V12.4318H63.7457C63.7457 11.9394 63.6473 11.5 63.4503 11.1136C63.2571 10.7273 62.9806 10.4223 62.6207 10.1989C62.2647 9.97538 61.8442 9.86364 61.3594 9.86364C60.8253 9.86364 60.3632 9.99621 59.973 10.2614C59.5866 10.5227 59.2893 10.8636 59.081 11.2841C58.8726 11.7045 58.7685 12.1553 58.7685 12.6364V13.4091C58.7685 14.0682 58.8821 14.6269 59.1094 15.0852C59.3404 15.5398 59.6605 15.8864 60.0696 16.125C60.4787 16.3598 60.9541 16.4773 61.4957 16.4773C61.848 16.4773 62.1662 16.428 62.4503 16.3295C62.7382 16.2273 62.9863 16.0758 63.1946 15.875C63.4029 15.6705 63.5639 15.4167 63.6776 15.1136L64.973 15.4773C64.8366 15.9167 64.6075 16.303 64.2855 16.6364C63.9635 16.9659 63.5658 17.2235 63.0923 17.4091C62.6188 17.5909 62.0866 17.6818 61.4957 17.6818ZM70.9446 8.77273V9.90909H66.4219V8.77273H70.9446ZM67.7401 6.68182H69.081V15C69.081 15.3788 69.1359 15.6629 69.2457 15.8523C69.3594 16.0379 69.5033 16.1629 69.6776 16.2273C69.8556 16.2879 70.0431 16.3182 70.2401 16.3182C70.3878 16.3182 70.509 16.3106 70.6037 16.2955C70.6984 16.2765 70.7741 16.2614 70.831 16.25L71.1037 17.4545C71.0128 17.4886 70.8859 17.5227 70.723 17.5568C70.5601 17.5947 70.3537 17.6136 70.1037 17.6136C69.7249 17.6136 69.3537 17.5322 68.9901 17.3693C68.6302 17.2064 68.331 16.9583 68.0923 16.625C67.8575 16.2917 67.7401 15.8712 67.7401 15.3636V6.68182ZM76.527 17.6818C75.6861 17.6818 74.9607 17.4962 74.3509 17.125C73.7448 16.75 73.277 16.2273 72.9474 15.5568C72.6217 14.8826 72.4588 14.0985 72.4588 13.2045C72.4588 12.3106 72.6217 11.5227 72.9474 10.8409C73.277 10.1553 73.7353 9.62121 74.3224 9.23864C74.9134 8.85227 75.6027 8.65909 76.3906 8.65909C76.8452 8.65909 77.294 8.73485 77.7372 8.88636C78.1804 9.03788 78.5838 9.28409 78.9474 9.625C79.3111 9.96212 79.6009 10.4091 79.8168 10.9659C80.0327 11.5227 80.1406 12.2083 80.1406 13.0227V13.5909H73.4134V12.4318H78.777C78.777 11.9394 78.6785 11.5 78.4815 11.1136C78.2884 10.7273 78.0118 10.4223 77.652 10.1989C77.2959 9.97538 76.8755 9.86364 76.3906 9.86364C75.8565 9.86364 75.3944 9.99621 75.0043 10.2614C74.6179 10.5227 74.3205 10.8636 74.1122 11.2841C73.9039 11.7045 73.7997 12.1553 73.7997 12.6364V13.4091C73.7997 14.0682 73.9134 14.6269 74.1406 15.0852C74.3717 15.5398 74.6918 15.8864 75.1009 16.125C75.5099 16.3598 75.9853 16.4773 76.527 16.4773C76.8793 16.4773 77.1974 16.428 77.4815 16.3295C77.7694 16.2273 78.0175 16.0758 78.2259 15.875C78.4342 15.6705 78.5952 15.4167 78.7088 15.1136L80.0043 15.4773C79.8679 15.9167 79.6387 16.303 79.3168 16.6364C78.9948 16.9659 78.5971 17.2235 78.1236 17.4091C77.6501 17.5909 77.1179 17.6818 76.527 17.6818Z"
                        fill="#2A3647"
                    />
                </svg>
            </div>
        </div>
    </div>
</div>
</div>
<div class="contactInfoWrapper">
    <p class="contactInfo">Contact Information</p>
</div>
    <div class="emailWrapper">
    <p class="emailHeader">Email</p>
    <a class="emailContacts" href="mailto:${mail}">${mail}</a>
</div>
<div class="Phone">
    <p class="phoneHeader">Phone</p>
    <a href="tel:${number}">${number}</a>
</div>
    `;
}

/**
 * Generates HTML content for the contact editing form.
 * @param {string} bg - The background color for the contact's initial circle.
 * @param {string} initials - The initials of the contact.
 * @param {string} name - The name of the contact.
 * @param {string} mail - The email address of the contact.
 * @param {string} number - The phone number of the contact.
 * @param {number} i - The index of the contact in the contacts list.
 * @returns {string} HTML content for the contact editing form.
 */
function generateEditContactHTML(bg, initials, name, mail, number, i) {
    return /*html*/ `
    <div class="wholePop">
    <div class="close">
        <img onclick="closePopUp()" src="../img/close.svg">
    </div>

    <div class="bluue">
        <img class="popUpJoinImg" src="../img/template-img/Capa 2.svg">
        <h2>Edit contact</h2>
        <img class="blueUnderline" src="../img/blueUnderline.svg">
    </div>

    <div class="initialCircleXL" style="border: 4px solid white; background-color: ${bg};">${initials}</div>

    <div class="whitee">
        <form onsubmit="saveContact(${i}); return false;">
            <div class="inputFields">
                <div class="singleInput">
                    <input required id="old-name" value="${name}" placeholder="${name}" type="text">
                    
                    <img src="../img/person.svg">
                </div>
                <div class="singleInput">
                    <input required id="old-email" value="${mail}" placeholder="${mail}" type="email">
                    
                    <img src="../img/mail.svg">
                </div>
                <div class="singleInput">
                    <input required id="old-tel" value="${number}" placeholder="${number}" type="tel">
                    
                    <img src="../img/telephone.svg">
                </div>
            </div>
            <div class="styleBtn">
                <button type="button" onclick="deleteContact(${i})" class="cancelBtn w113">Delete</button>
                <button type="submit" class="createBtn w111">Save <img src="../img/check.svg"></button>
            </div>
        </form>
    </div>
</div>
    `;
}

/**
 * Generates SVG HTML content for a priority indicator with "Urgent" status.
 * @returns {string} HTML content of the SVG for the "Urgent" priority indicator.
 */
function getPrioUrgentSVG() {
    return /*html*/ `
        <svg width="29" height="24" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6528 15.2547C19.4182 15.2551 19.1896 15.1803 19.0007 15.0412L10.7487 8.958L2.49663 15.0412C2.38078 15.1267 2.24919 15.1887 2.10939 15.2234C1.96959 15.2582 1.82431 15.2651 1.68184 15.2437C1.53937 15.2223 1.40251 15.1732 1.27906 15.099C1.15562 15.0247 1.04801 14.927 0.96238 14.8112C0.876751 14.6954 0.814779 14.5639 0.780002 14.4243C0.745226 14.2846 0.738325 14.1394 0.759696 13.997C0.802855 13.7095 0.958545 13.4509 1.19252 13.2781L10.0966 6.70761C10.2853 6.56802 10.5139 6.49268 10.7487 6.49268C10.9835 6.49268 11.212 6.56802 11.4007 6.70761L20.3048 13.2781C20.4908 13.415 20.6286 13.6071 20.6988 13.827C20.7689 14.0469 20.7678 14.2833 20.6955 14.5025C20.6232 14.7216 20.4834 14.9124 20.2962 15.0475C20.1089 15.1826 19.8837 15.2551 19.6528 15.2547Z" fill="#FF3D00"/>
        <path d="M19.6528 9.50568C19.4182 9.50609 19.1896 9.43124 19.0007 9.29214L10.7487 3.20898L2.49663 9.29214C2.26266 9.46495 1.96957 9.5378 1.68184 9.49468C1.39412 9.45155 1.13532 9.29597 0.962385 9.06218C0.789449 8.82838 0.716541 8.53551 0.7597 8.24799C0.802859 7.96048 0.95855 7.70187 1.19252 7.52906L10.0966 0.958588C10.2853 0.818997 10.5139 0.743652 10.7487 0.743652C10.9835 0.743652 11.212 0.818997 11.4007 0.958588L20.3048 7.52906C20.4908 7.66598 20.6286 7.85809 20.6988 8.07797C20.769 8.29785 20.7678 8.53426 20.6955 8.75344C20.6232 8.97262 20.4834 9.16338 20.2962 9.29847C20.1089 9.43356 19.8837 9.50608 19.6528 9.50568Z" fill="#FF3D00"/>
        </svg>
    `;
}

/**
 * Generates SVG HTML content for a priority indicator with "Medium" status.
 * @returns {string} HTML content of the SVG for the "Medium" priority indicator.
 */
function getPrioMediumSVG() {
    return /*html*/ `
        <svg width="26" height="16" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5_843)">
                <path d="M16.5685 7.16664L1.43151 7.16664C1.18446 7.16664 0.947523 7.06779 0.772832 6.89183C0.598141 6.71587 0.5 6.47722 0.5 6.22837C0.5 5.97953 0.598141 5.74087 0.772832 5.56491C0.947523 5.38895 1.18446 5.2901 1.43151 5.2901L16.5685 5.2901C16.8155 5.2901 17.0525 5.38895 17.2272 5.56491C17.4019 5.74087 17.5 5.97953 17.5 6.22837C17.5 6.47722 17.4019 6.71587 17.2272 6.89183C17.0525 7.06779 16.8155 7.16664 16.5685 7.16664Z" fill="#FFA800"/>
                <path d="M16.5685 2.70986L1.43151 2.70986C1.18446 2.70986 0.947523 2.611 0.772832 2.43504C0.598141 2.25908 0.5 2.02043 0.5 1.77158C0.5 1.52274 0.598141 1.28409 0.772832 1.10813C0.947523 0.932166 1.18446 0.833313 1.43151 0.833313L16.5685 0.833313C16.8155 0.833313 17.0525 0.932166 17.2272 1.10813C17.4019 1.28409 17.5 1.52274 17.5 1.77158C17.5 2.02043 17.4019 2.25908 17.2272 2.43504C17.0525 2.611 16.8155 2.70986 16.5685 2.70986Z" fill="#FFA800"/></g><defs>
            <clipPath id="clip0_5_843">
                 <rect width="17" height="6.33333" fill="white" transform="translate(0.5 0.833313)" />
             </clipPath>
         </defs>
       </svg>
    `;
}

/**
 * Generates SVG HTML content for a priority indicator with "Low" status.
 * @returns {string} HTML content of the SVG for the "Low" priority indicator.
 */
function getPrioLowSVG() {
    return /*html*/ `
        <svg width="29" height="24" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2485 9.50589C10.0139 9.5063 9.7854 9.43145 9.59655 9.29238L0.693448 2.72264C0.57761 2.63708 0.47977 2.52957 0.405515 2.40623C0.33126 2.28289 0.282043 2.14614 0.260675 2.00379C0.217521 1.71631 0.290421 1.42347 0.463337 1.1897C0.636253 0.955928 0.895022 0.800371 1.18272 0.757248C1.47041 0.714126 1.76347 0.786972 1.99741 0.95976L10.2485 7.04224L18.4997 0.95976C18.6155 0.874204 18.7471 0.812285 18.8869 0.777538C19.0266 0.742791 19.1719 0.735896 19.3144 0.757248C19.4568 0.7786 19.5937 0.82778 19.7171 0.901981C19.8405 0.976181 19.9481 1.07395 20.0337 1.1897C20.1194 1.30545 20.1813 1.43692 20.2161 1.57661C20.2509 1.71629 20.2578 1.86145 20.2364 2.00379C20.215 2.14614 20.1658 2.28289 20.0916 2.40623C20.0173 2.52957 19.9195 2.63708 19.8036 2.72264L10.9005 9.29238C10.7117 9.43145 10.4831 9.5063 10.2485 9.50589Z" fill="#7AE229"/>
        <path d="M10.2485 15.2544C10.0139 15.2548 9.7854 15.18 9.59655 15.0409L0.693448 8.47117C0.459502 8.29839 0.30383 8.03981 0.260675 7.75233C0.217521 7.46485 0.290421 7.17201 0.463337 6.93824C0.636253 6.70446 0.895021 6.54891 1.18272 6.50578C1.47041 6.46266 1.76347 6.53551 1.99741 6.7083L10.2485 12.7908L18.4997 6.7083C18.7336 6.53551 19.0267 6.46266 19.3144 6.50578C19.602 6.54891 19.8608 6.70446 20.0337 6.93824C20.2066 7.17201 20.2795 7.46485 20.2364 7.75233C20.1932 8.03981 20.0376 8.29839 19.8036 8.47117L10.9005 15.0409C10.7117 15.18 10.4831 15.2548 10.2485 15.2544Z" fill="#7AE229"/>
        </svg>
    `;
}

/**
 * Generates HTML content for the task template.
 * @param {Object} task - The task object containing all necessary data.
 * @param {string} assignedToHtml - HTML content for displaying assigned contacts.
 * @param {string} subtasksHtml - HTML content for displaying subtasks.
 * @param {string} prioSVG - HTML content for the priority indicator SVG.
 * @returns {string} HTML content for the task template.
 */
function generateTaskTemplateHTML(task, assignedToHtml, subtasksHtml, prioSVG) {
    return /*html*/ `
    <div id="cardModal-container">
        <div id="cardModal" class="openCardBackground">
                <div class="openTask edit-form-style">
                    <div class="cardHeader">
                    <div class="cardType" style="border: 2px solid white; background-color: ${task.category === "User Story" ? "#0038ff" : task.category === "Technical Task" ? "#1FD7C1" : "defaultBackgroundColor"};">

                            <p class="cardTypeDescription">${task.category}</p>
                        </div>
                        <svg onclick="closeCardModal('cardModal-container')" class="closeIcon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_12_1578" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <rect x="4" y="4" width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_12_1578)">
                                <path
                                    d="M16 17.4L11.1 22.3C10.9167 22.4833 10.6834 22.575 10.4 22.575C10.1167 22.575 9.88338 22.4833 9.70005 22.3C9.51672 22.1167 9.42505 21.8833 9.42505 21.6C9.42505 21.3167 9.51672 21.0833 9.70005 20.9L14.6 16L9.70005 11.1C9.51672 10.9167 9.42505 10.6833 9.42505 10.4C9.42505 10.1167 9.51672 9.88332 9.70005 9.69999C9.88338 9.51665 10.1167 9.42499 10.4 9.42499C10.6834 9.42499 10.9167 9.51665 11.1 9.69999L16 14.6L20.9 9.69999C21.0834 9.51665 21.3167 9.42499 21.6 9.42499C21.8834 9.42499 22.1167 9.51665 22.3 9.69999C22.4834 9.88332 22.575 10.1167 22.575 10.4C22.575 10.6833 22.4834 10.9167 22.3 11.1L17.4 16L22.3 20.9C22.4834 21.0833 22.575 21.3167 22.575 21.6C22.575 21.8833 22.4834 22.1167 22.3 22.3C22.1167 22.4833 21.8834 22.575 21.6 22.575C21.3167 22.575 21.0834 22.4833 20.9 22.3L16 17.4Z"
                                    fill="#2A3647"
                                />
                            </g>
                        </svg>
                    </div>
                    <h1 class="cardHeadlineOverlay">${task.title}</h1>
                    <p class="cardSubheadline">${task.description}</p>
                    <div class="dateWrapper">
                        <p class="dateDescription">Due date:</p>
                        <p class="date">${task.dueDate}</p>
                    </div>
                    <div class="priorityWrapper">
                        <p class="priorityDescription">Priority:</p>
                        <div class="priority">
                            <p class="priorityGrade">${task.priority}</p>
                            ${prioSVG}
                        </div>
                    </div>
                    <div class="assignedToWrapper">
                        <p class="assignedToHeadline">Assigned To:</p>
                        <div class="assignedToNameWrapper">
                            ${assignedToHtml}
                        </div>
                    </div>
                    <div class="subtasksWrapper">
                        <p class="subtaskTitle">Subtasks:</p>
                        <div class="subtaskCheckboxWrapper">
                           ${subtasksHtml}
                        </div>
                    </div>
                    <div class="footerWrapper">
                        <div onclick="deleteTask(${task.id})" class="deleteWrapper">
                            <img src="../img/delete.svg" alt="" />
                            <p class="delete">Delete</p>
                        </div>
                        <div onclick="editTask()" class="deleteWrapper">
                            <img src="../img/edit.svg" alt="" />
                            <p class="delete">Edit</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    `;
}

/**
 * Generates HTML template for adding a new task.
 * @returns {string} HTML content for the add task template.
 */
function addTaskTemplate() {
    return /*html*/ `
<div id="popup-container"></div>
<div id="addTaskModal" class="modalBackground">
    <div id="addTaskTemplateContent" class="content">
            <form class="all" onsubmit="createTask(); return false;">
                <div class="addTaskHeader">
                    <h1 class="addTaskHeadline">Add Task</h1>
                    <svg onclick="closeCardModal('addTaskModal')" class="closeIcon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_12_1578" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                            <rect x="4" y="4" width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_12_1578)">
                            <path
                                d="M16 17.4L11.1 22.3C10.9167 22.4833 10.6834 22.575 10.4 22.575C10.1167 22.575 9.88338 22.4833 9.70005 22.3C9.51672 22.1167 9.42505 21.8833 9.42505 21.6C9.42505 21.3167 9.51672 21.0833 9.70005 20.9L14.6 16L9.70005 11.1C9.51672 10.9167 9.42505 10.6833 9.42505 10.4C9.42505 10.1167 9.51672 9.88332 9.70005 9.69999C9.88338 9.51665 10.1167 9.42499 10.4 9.42499C10.6834 9.42499 10.9167 9.51665 11.1 9.69999L16 14.6L20.9 9.69999C21.0834 9.51665 21.3167 9.42499 21.6 9.42499C21.8834 9.42499 22.1167 9.51665 22.3 9.69999C22.4834 9.88332 22.575 10.1167 22.575 10.4C22.575 10.6833 22.4834 10.9167 22.3 11.1L17.4 16L22.3 20.9C22.4834 21.0833 22.575 21.3167 22.575 21.6C22.575 21.8833 22.4834 22.1167 22.3 22.3C22.1167 22.4833 21.8834 22.575 21.6 22.575C21.3167 22.575 21.0834 22.4833 20.9 22.3L16 17.4Z"
                                fill="#2A3647"
                            />
                        </g>
                    </svg>
                </div>
                <div class="task">
                    <div class="taskLeftSide">
                        <div class="margin-bot">
                            <p>Title<span class="colored-star">*</span></p>
                            <input id="input-title" placeholder="Enter a title" class="inputs" type="text" required />
                        </div>
                        <div class="margin-bot">
                            <p>Description</p>
                            <textarea id="textArea-description" placeholder="Enter a Description" class="textarea"></textarea>
                        </div>
                        <div class="margin-bot">
                            <p>Assigned to</p>
                            <div class="combobox" onclick="openOrCloseCheckBoxAreaForAssigned()">
                                <p id="assigned-text">Select contacts to assigned</p>
                                <div class="hover-style">
                                    <img id="nav-image-assigned" src="../img/navigation.png" alt="navLogo" />
                                </div>
                            </div>
                            <div class="position-context">
                                <div id="checkBoxItemsAssigned" class="items"></div>
                            </div>
                            <div id="selectedUserCircle" class="selected-user-circle"></div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="taskRightSide">
                        <div class="margin-bot">
                            <p>Due date<span class="colored-star">*</span></p>
                            <input id="input-due-date" placeholder="dd/mm/yyyy" class="inputs" type="date" required />
                        </div>
                        <div class="margin-bot">
                            <p>Prio</p>
                            <div class="prioButtons">
                                <button id="urgent-button-id" type="button" class="prio-urgent">
                                    Urgent
                                    <div class="prio-button-svg-container">
                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_139307_4282)">
                                                <path
                                                    d="M19.6528 15.2547C19.4182 15.2551 19.1896 15.1803 19.0007 15.0412L10.7487 8.958L2.49663 15.0412C2.38078 15.1267 2.24919 15.1887 2.10939 15.2234C1.96959 15.2582 1.82431 15.2651 1.68184 15.2437C1.53937 15.2223 1.40251 15.1732 1.27906 15.099C1.15562 15.0247 1.04801 14.927 0.96238 14.8112C0.876751 14.6954 0.814779 14.5639 0.780002 14.4243C0.745226 14.2846 0.738325 14.1394 0.759696 13.997C0.802855 13.7095 0.958545 13.4509 1.19252 13.2781L10.0966 6.70761C10.2853 6.56802 10.5139 6.49268 10.7487 6.49268C10.9835 6.49268 11.212 6.56802 11.4007 6.70761L20.3048 13.2781C20.4908 13.415 20.6286 13.6071 20.6988 13.827C20.7689 14.0469 20.7678 14.2833 20.6955 14.5025C20.6232 14.7216 20.4834 14.9124 20.2962 15.0475C20.1089 15.1826 19.8837 15.2551 19.6528 15.2547Z"
                                                    fill="#FF3D00"
                                                />
                                                <path
                                                    d="M19.6528 9.50568C19.4182 9.50609 19.1896 9.43124 19.0007 9.29214L10.7487 3.20898L2.49663 9.29214C2.26266 9.46495 1.96957 9.5378 1.68184 9.49468C1.39412 9.45155 1.13532 9.29597 0.962385 9.06218C0.789449 8.82838 0.716541 8.53551 0.7597 8.24799C0.802859 7.96048 0.95855 7.70187 1.19252 7.52906L10.0966 0.958588C10.2853 0.818997 10.5139 0.743652 10.7487 0.743652C10.9835 0.743652 11.212 0.818997 11.4007 0.958588L20.3048 7.52906C20.4908 7.66598 20.6286 7.85809 20.6988 8.07797C20.769 8.29785 20.7678 8.53426 20.6955 8.75344C20.6232 8.97262 20.4834 9.16338 20.2962 9.29847C20.1089 9.43356 19.8837 9.50608 19.6528 9.50568Z"
                                                    fill="#FF3D00"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_139307_4282">
                                                    <rect width="20" height="14.5098" fill="white" transform="translate(0.748535 0.745117)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </button>
                                <button id="medium-button-id"  type="button" class="prio-medium">
                                    Medium
                                    <div class="prio-button-svg-container">
                                        <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_139307_4289)">
                                                <path
                                                    d="M19.1526 7.72528H1.34443C1.05378 7.72528 0.775033 7.60898 0.569514 7.40197C0.363995 7.19495 0.248535 6.91419 0.248535 6.62143C0.248535 6.32867 0.363995 6.0479 0.569514 5.84089C0.775033 5.63388 1.05378 5.51758 1.34443 5.51758H19.1526C19.4433 5.51758 19.722 5.63388 19.9276 5.84089C20.1331 6.0479 20.2485 6.32867 20.2485 6.62143C20.2485 6.91419 20.1331 7.19495 19.9276 7.40197C19.722 7.60898 19.4433 7.72528 19.1526 7.72528Z"
                                                    fill="#FFA800"
                                                />
                                                <path
                                                    d="M19.1526 2.48211H1.34443C1.05378 2.48211 0.775033 2.36581 0.569514 2.1588C0.363995 1.95179 0.248535 1.67102 0.248535 1.37826C0.248535 1.0855 0.363995 0.804736 0.569514 0.597724C0.775033 0.390712 1.05378 0.274414 1.34443 0.274414L19.1526 0.274414C19.4433 0.274414 19.722 0.390712 19.9276 0.597724C20.1331 0.804736 20.2485 1.0855 20.2485 1.37826C20.2485 1.67102 20.1331 1.95179 19.9276 2.1588C19.722 2.36581 19.4433 2.48211 19.1526 2.48211Z"
                                                    fill="#FFA800"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_139307_4289">
                                                    <rect width="20" height="7.45098" fill="white" transform="translate(0.248535 0.274414)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </button>
                                <button id="low-button-id" type="button" class="prio-low">
                                    Low
                                    <div class="prio-button-svg-container">
                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.2485 9.50589C10.0139 9.5063 9.7854 9.43145 9.59655 9.29238L0.693448 2.72264C0.57761 2.63708 0.47977 2.52957 0.405515 2.40623C0.33126 2.28289 0.282043 2.14614 0.260675 2.00379C0.217521 1.71631 0.290421 1.42347 0.463337 1.1897C0.636253 0.955928 0.895022 0.800371 1.18272 0.757248C1.47041 0.714126 1.76347 0.786972 1.99741 0.95976L10.2485 7.04224L18.4997 0.95976C18.6155 0.874204 18.7471 0.812285 18.8869 0.777538C19.0266 0.742791 19.1719 0.735896 19.3144 0.757248C19.4568 0.7786 19.5937 0.82778 19.7171 0.901981C19.8405 0.976181 19.9481 1.07395 20.0337 1.1897C20.1194 1.30545 20.1813 1.43692 20.2161 1.57661C20.2509 1.71629 20.2578 1.86145 20.2364 2.00379C20.215 2.14614 20.1658 2.28289 20.0916 2.40623C20.0173 2.52957 19.9195 2.63708 19.8036 2.72264L10.9005 9.29238C10.7117 9.43145 10.4831 9.5063 10.2485 9.50589Z"
                                                fill="#7AE229"
                                            />
                                            <path
                                                d="M10.2485 15.2544C10.0139 15.2548 9.7854 15.18 9.59655 15.0409L0.693448 8.47117C0.459502 8.29839 0.30383 8.03981 0.260675 7.75233C0.217521 7.46485 0.290421 7.17201 0.463337 6.93824C0.636253 6.70446 0.895021 6.54891 1.18272 6.50578C1.47041 6.46266 1.76347 6.53551 1.99741 6.7083L10.2485 12.7908L18.4997 6.7083C18.7336 6.53551 19.0267 6.46266 19.3144 6.50578C19.602 6.54891 19.8608 6.70446 20.0337 6.93824C20.2066 7.17201 20.2795 7.46485 20.2364 7.75233C20.1932 8.03981 20.0376 8.29839 19.8036 8.47117L10.9005 15.0409C10.7117 15.18 10.4831 15.2548 10.2485 15.2544Z"
                                                fill="#7AE229"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="margin-bot">
                            <p>Category<span class="colored-star">*</span></p>
                            <div id="combobox-category" class="combobox" onclick="openOrCloseCheckBoxAreaForCategory()">
                                <p id="category-text">Select task category</p>
                                <div class="hover-style">
                                    <img id="nav-image-category" src="../img/navigation.png" alt="navLogo" />
                                </div>
                            </div>
                            <div id="position-context" class="position-context">
                                <div id="itemsCategory" class="items"></div>
                            </div>
                            <div id="failureCategory" class="failure"></div>
                        </div>
                        <div class="margin-bot">
                            <p>Subtasks</p>
                            <div class="subtasks-input-container">
                                <input id="newSubtask" placeholder="Add new subtask" class="inputs" type="text" />
                                <svg onclick="addSubtask()" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.24854 8H1.24854C0.965202 8 0.727702 7.90417 0.536035 7.7125C0.344368 7.52083 0.248535 7.28333 0.248535 7C0.248535 6.71667 0.344368 6.47917 0.536035 6.2875C0.727702 6.09583 0.965202 6 1.24854 6H6.24854V1C6.24854 0.716667 6.34437 0.479167 6.53604 0.2875C6.7277 0.0958333 6.9652 0 7.24854 0C7.53187 0 7.76937 0.0958333 7.96104 0.2875C8.1527 0.479167 8.24854 0.716667 8.24854 1V6H13.2485C13.5319 6 13.7694 6.09583 13.961 6.2875C14.1527 6.47917 14.2485 6.71667 14.2485 7C14.2485 7.28333 14.1527 7.52083 13.961 7.7125C13.7694 7.90417 13.5319 8 13.2485 8H8.24854V13C8.24854 13.2833 8.1527 13.5208 7.96104 13.7125C7.76937 13.9042 7.53187 14 7.24854 14C6.9652 14 6.7277 13.9042 6.53604 13.7125C6.34437 13.5208 6.24854 13.2833 6.24854 13V8Z"
                                        fill="#2A3647"
                                    />
                                </svg>
                            </div>
                            <ul id="subtasks" class="subtasks-container"></ul>
                            <div id="subtasks-error-message" class="failure"></div>
                        </div>
                    </div>
                </div>
                <footer>
                    <p><span class="colored-star">*</span>This field is required</p>
                    <div class="clear-and-create-button-container">
                        <button class="clear-button" type="button" onclick="clearTask()">
                            <span>Clear</span>
                            <img class="clear-image" src="../img/close.svg" />
                        </button>
                        <button class="create-button" type="submit">
                            Create Task
                            <img class="create-image" src="../img/check.png" />
                        </button>
                    </div>
                </footer>
            </form>
        </div>
    </div>
</div>`;
}

/**
 * Generates HTML template for editing a task.
 * @returns {string} HTML content for the edit task template.
 */
function editTaskTemplate() {
    return /*html*/ `
<div id="popup-container"></div>
<div id="card-modal-id" class="modalBackground">
    <div id="card-modal-content" class="content">
            <form class="edit-form-style" onsubmit="saveEditTask(); return false;">
                <div class="addTaskHeader">
                    <div></div>
                    <svg onclick="closeEditCardModal(${currentTaskModal.id})" class="closeIcon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_12_1578" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                            <rect x="4" y="4" width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_12_1578)">
                            <path
                                d="M16 17.4L11.1 22.3C10.9167 22.4833 10.6834 22.575 10.4 22.575C10.1167 22.575 9.88338 22.4833 9.70005 22.3C9.51672 22.1167 9.42505 21.8833 9.42505 21.6C9.42505 21.3167 9.51672 21.0833 9.70005 20.9L14.6 16L9.70005 11.1C9.51672 10.9167 9.42505 10.6833 9.42505 10.4C9.42505 10.1167 9.51672 9.88332 9.70005 9.69999C9.88338 9.51665 10.1167 9.42499 10.4 9.42499C10.6834 9.42499 10.9167 9.51665 11.1 9.69999L16 14.6L20.9 9.69999C21.0834 9.51665 21.3167 9.42499 21.6 9.42499C21.8834 9.42499 22.1167 9.51665 22.3 9.69999C22.4834 9.88332 22.575 10.1167 22.575 10.4C22.575 10.6833 22.4834 10.9167 22.3 11.1L17.4 16L22.3 20.9C22.4834 21.0833 22.575 21.3167 22.575 21.6C22.575 21.8833 22.4834 22.1167 22.3 22.3C22.1167 22.4833 21.8834 22.575 21.6 22.575C21.3167 22.575 21.0834 22.4833 20.9 22.3L16 17.4Z"
                                fill="#2A3647"
                            />
                        </g>
                    </svg>
                </div>
                <div class="task d-column">
                    <div class="taskLeftSide">
                        <div class="margin-bot">
                            <p>Title<span class="colored-star">*</span></p>
                            <input id="input-title" class="inputs" type="text" required />
                        </div>
                        <div class="margin-bot">
                            <p>Description</p>
                            <textarea id="textArea-description"  class="textarea"></textarea>
                        </div>

                    </div>
                    <div class="taskRightSide">
                        <div class="margin-bot">
                            <p>Due date<span class="colored-star">*</span></p>
                            <input id="input-due-date" class="inputs" type="date" required />
                        </div>
                        <div class="margin-bot">
                            <p>Prio</p>
                            <div class="prioButtons">
                                <button id="urgent-button-id" type="button" class="prio-urgent">
                                    Urgent
                                    <div class="prio-button-svg-container">
                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_139307_4282)">
                                                <path
                                                    d="M19.6528 15.2547C19.4182 15.2551 19.1896 15.1803 19.0007 15.0412L10.7487 8.958L2.49663 15.0412C2.38078 15.1267 2.24919 15.1887 2.10939 15.2234C1.96959 15.2582 1.82431 15.2651 1.68184 15.2437C1.53937 15.2223 1.40251 15.1732 1.27906 15.099C1.15562 15.0247 1.04801 14.927 0.96238 14.8112C0.876751 14.6954 0.814779 14.5639 0.780002 14.4243C0.745226 14.2846 0.738325 14.1394 0.759696 13.997C0.802855 13.7095 0.958545 13.4509 1.19252 13.2781L10.0966 6.70761C10.2853 6.56802 10.5139 6.49268 10.7487 6.49268C10.9835 6.49268 11.212 6.56802 11.4007 6.70761L20.3048 13.2781C20.4908 13.415 20.6286 13.6071 20.6988 13.827C20.7689 14.0469 20.7678 14.2833 20.6955 14.5025C20.6232 14.7216 20.4834 14.9124 20.2962 15.0475C20.1089 15.1826 19.8837 15.2551 19.6528 15.2547Z"
                                                    fill="#FF3D00"
                                                />
                                                <path
                                                    d="M19.6528 9.50568C19.4182 9.50609 19.1896 9.43124 19.0007 9.29214L10.7487 3.20898L2.49663 9.29214C2.26266 9.46495 1.96957 9.5378 1.68184 9.49468C1.39412 9.45155 1.13532 9.29597 0.962385 9.06218C0.789449 8.82838 0.716541 8.53551 0.7597 8.24799C0.802859 7.96048 0.95855 7.70187 1.19252 7.52906L10.0966 0.958588C10.2853 0.818997 10.5139 0.743652 10.7487 0.743652C10.9835 0.743652 11.212 0.818997 11.4007 0.958588L20.3048 7.52906C20.4908 7.66598 20.6286 7.85809 20.6988 8.07797C20.769 8.29785 20.7678 8.53426 20.6955 8.75344C20.6232 8.97262 20.4834 9.16338 20.2962 9.29847C20.1089 9.43356 19.8837 9.50608 19.6528 9.50568Z"
                                                    fill="#FF3D00"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_139307_4282">
                                                    <rect width="20" height="14.5098" fill="white" transform="translate(0.748535 0.745117)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </button>
                                <button id="medium-button-id" type="button" class="prio-medium">
                                    Medium
                                    <div class="prio-button-svg-container">
                                        <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_139307_4289)">
                                                <path
                                                    d="M19.1526 7.72528H1.34443C1.05378 7.72528 0.775033 7.60898 0.569514 7.40197C0.363995 7.19495 0.248535 6.91419 0.248535 6.62143C0.248535 6.32867 0.363995 6.0479 0.569514 5.84089C0.775033 5.63388 1.05378 5.51758 1.34443 5.51758H19.1526C19.4433 5.51758 19.722 5.63388 19.9276 5.84089C20.1331 6.0479 20.2485 6.32867 20.2485 6.62143C20.2485 6.91419 20.1331 7.19495 19.9276 7.40197C19.722 7.60898 19.4433 7.72528 19.1526 7.72528Z"
                                                    fill="#FFA800"
                                                />
                                                <path
                                                    d="M19.1526 2.48211H1.34443C1.05378 2.48211 0.775033 2.36581 0.569514 2.1588C0.363995 1.95179 0.248535 1.67102 0.248535 1.37826C0.248535 1.0855 0.363995 0.804736 0.569514 0.597724C0.775033 0.390712 1.05378 0.274414 1.34443 0.274414L19.1526 0.274414C19.4433 0.274414 19.722 0.390712 19.9276 0.597724C20.1331 0.804736 20.2485 1.0855 20.2485 1.37826C20.2485 1.67102 20.1331 1.95179 19.9276 2.1588C19.722 2.36581 19.4433 2.48211 19.1526 2.48211Z"
                                                    fill="#FFA800"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_139307_4289">
                                                    <rect width="20" height="7.45098" fill="white" transform="translate(0.248535 0.274414)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </button>
                                <button id="low-button-id" type="button" class="prio-low">
                                    Low
                                    <div class="prio-button-svg-container">
                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.2485 9.50589C10.0139 9.5063 9.7854 9.43145 9.59655 9.29238L0.693448 2.72264C0.57761 2.63708 0.47977 2.52957 0.405515 2.40623C0.33126 2.28289 0.282043 2.14614 0.260675 2.00379C0.217521 1.71631 0.290421 1.42347 0.463337 1.1897C0.636253 0.955928 0.895022 0.800371 1.18272 0.757248C1.47041 0.714126 1.76347 0.786972 1.99741 0.95976L10.2485 7.04224L18.4997 0.95976C18.6155 0.874204 18.7471 0.812285 18.8869 0.777538C19.0266 0.742791 19.1719 0.735896 19.3144 0.757248C19.4568 0.7786 19.5937 0.82778 19.7171 0.901981C19.8405 0.976181 19.9481 1.07395 20.0337 1.1897C20.1194 1.30545 20.1813 1.43692 20.2161 1.57661C20.2509 1.71629 20.2578 1.86145 20.2364 2.00379C20.215 2.14614 20.1658 2.28289 20.0916 2.40623C20.0173 2.52957 19.9195 2.63708 19.8036 2.72264L10.9005 9.29238C10.7117 9.43145 10.4831 9.5063 10.2485 9.50589Z"
                                                fill="#7AE229"
                                            />
                                            <path
                                                d="M10.2485 15.2544C10.0139 15.2548 9.7854 15.18 9.59655 15.0409L0.693448 8.47117C0.459502 8.29839 0.30383 8.03981 0.260675 7.75233C0.217521 7.46485 0.290421 7.17201 0.463337 6.93824C0.636253 6.70446 0.895021 6.54891 1.18272 6.50578C1.47041 6.46266 1.76347 6.53551 1.99741 6.7083L10.2485 12.7908L18.4997 6.7083C18.7336 6.53551 19.0267 6.46266 19.3144 6.50578C19.602 6.54891 19.8608 6.70446 20.0337 6.93824C20.2066 7.17201 20.2795 7.46485 20.2364 7.75233C20.1932 8.03981 20.0376 8.29839 19.8036 8.47117L10.9005 15.0409C10.7117 15.18 10.4831 15.2548 10.2485 15.2544Z"
                                                fill="#7AE229"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="margin-bot">
                            <p>Assigned to</p>
                            <div class="combobox" onclick="openOrCloseCheckBoxAreaForAssigned()">
                                <p id="assigned-text">Select contacts to assigned</p>
                                <div class="hover-style">
                                    <img id="nav-image-assigned" src="../img/navigation.png" alt="navLogo" />
                                </div>
                            </div>
                            <div class="position-context">
                                <div id="checkBoxItemsAssigned" class="items"></div>
                            </div>
                            <div id="selectedUserCircle" class="selected-user-circle">
                            </div>
                        </div>
                        <div class="margin-bot">
                            <p>Subtasks</p>
                            <div class="subtasks-input-container">
                                <input id="newSubtask" placeholder="Add new subtask" class="inputs" type="text" />
                                <svg onclick="addSubtask()" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.24854 8H1.24854C0.965202 8 0.727702 7.90417 0.536035 7.7125C0.344368 7.52083 0.248535 7.28333 0.248535 7C0.248535 6.71667 0.344368 6.47917 0.536035 6.2875C0.727702 6.09583 0.965202 6 1.24854 6H6.24854V1C6.24854 0.716667 6.34437 0.479167 6.53604 0.2875C6.7277 0.0958333 6.9652 0 7.24854 0C7.53187 0 7.76937 0.0958333 7.96104 0.2875C8.1527 0.479167 8.24854 0.716667 8.24854 1V6H13.2485C13.5319 6 13.7694 6.09583 13.961 6.2875C14.1527 6.47917 14.2485 6.71667 14.2485 7C14.2485 7.28333 14.1527 7.52083 13.961 7.7125C13.7694 7.90417 13.5319 8 13.2485 8H8.24854V13C8.24854 13.2833 8.1527 13.5208 7.96104 13.7125C7.76937 13.9042 7.53187 14 7.24854 14C6.9652 14 6.7277 13.9042 6.53604 13.7125C6.34437 13.5208 6.24854 13.2833 6.24854 13V8Z"
                                        fill="#2A3647"
                                    />
                                </svg>
                            </div>
                            <ul id="subtasks" >
                             </ul>
                            <div id="subtasks-error-message" class="failure"></div>
                        </div>
                    </div>
                </div>
                <footer>
                    <p><span class="colored-star">*</span>This field is required</p>
                    <div class="clear-and-create-button-container">
                        <button class="create-button" type="submit">
                            OK
                            <img class="create-image save-edit-button" src="../img/check.png" />
                        </button>
                    </div>
                </footer>
            </form>
        </div>
    </div>
</div>`;
}

/**
 * Generates HTML content for editing subtasks.
 * @param {string} uniqueId - A unique identifier for the subtask.
 * @param {string} editSubtask - The text content of the subtask.
 * @returns {string} HTML content for editing subtasks.
 */
function generateEditSubtasksHTML(uniqueId, editSubtask) {
    return /*html*/ `
    <div onclick="editSubTask('${uniqueId}')" class="new-sub-task-container" id="${uniqueId}">
    <li class="new-subtask-text">${editSubtask}</li>
    <div class="new-subtask-image-container">
        <img onclick="editSubTaskClick('${uniqueId}', event)" src="../img/edit.png" alt="edit">
        <img onclick="deleteSubTask('${uniqueId}')" src="../img/trash.png" alt="delete">
    </div>
</div>`;
}

/**
 * Generates HTML content for a popup notification template.
 * @returns {string} HTML content for the popup notification.
 */
function getPopUpTemplate(popupMessage) {
    return /*html*/ `
    <div class="overlay">
       <div id="popup" class="popup">
           <div class="popup-content">
              <span>${popupMessage}</span>
           </div>
       </div>
    </div> 
    `;
}

/**
 * Generates HTML content for the contact register header based on the first letter of contact names.
 * @param {string} sortedByLetter - The letter by which the contacts are sorted.
 * @returns {string} HTML content for the contact register header.
 */
function generateRegisterHTML(sortedByLetter) {
    return /*html*/ `
    <div class="letterWrapper">
        <div class="Buchstabe">${sortedByLetter}</div>
        <div class="divider"></div>
    </div>
    `;
}

/**
 * Renders individual contact entries for the contact register.
 * @param {number} i - The index of the contact in the contacts list.
 * @param {string} bg - The background color for the contact's initial circle.
 * @param {string} initials - The initials of the contact.
 * @param {string} name - The name of the contact.
 * @param {string} mail - The email address of the contact.
 * @returns {string} HTML content for an individual contact entry.
 */
function renderContactToRegister(i, bg, initials, name, mail) {
    return /*html*/ `    
    <div id="contact${i}" onclick="toggleContact(${i}); openMobileName()" class="name contact-item">
        <div class="initialCircle" style="border: 1px solid white; background-color: ${bg};">${initials}</div>
            <div class="contactWrapper">
                <div class="fullName">${name}</div>
            <div class="email">${mail}</div>
        </div>
    </div>`;
}

/**
 * Generates HTML content for displaying subtask progress within a task card.
 * @param {number} progressValue - The completion percentage of the subtasks.
 * @param {number} completedSubtasks - The number of completed subtasks.
 * @param {number} totalSubtasks - The total number of subtasks.
 * @returns {string} HTML content for subtask progress display.
 */
function generateTodoSubtask(progressValue, completedSubtasks, totalSubtasks) {
    return /*html*/ `
    <div class="subTaskWrapper">
        <progress id="file" value="${progressValue}" max="100"></progress>
        <div class="subtask">
            <p>${completedSubtasks}/${totalSubtasks}</p>
            <p>Subtasks</p>
        </div>
     </div>`;
}

/**
 * Generates HTML content for a task card modal, including subtask progress, assigned contacts, and priority.
 * @param {Object} task - The task object containing all necessary data.
 * @param {string} subTaskWrapperHTML - HTML content for displaying subtask progress.
 * @param {string} circleTemplate - HTML content for displaying assigned contacts' initials.
 * @param {string} prioSVG - HTML content for the priority indicator SVG.
 * @returns {string} HTML content for the task card modal.
 */
function getTaskCardTemplate(task, subTaskWrapperHTML, circleTemplate, prioSVG) {
    return /*html*/ `
    <div onclick="openCardModal(this.getAttribute('data-task-id'))" data-task-id="${task.id}" draggable="true" ondragstart="startDragging(${task.id})" class="toDoCard">
         <div class="toDoCardContent">
             <div class="badge" style="border: 2px solid white; background-color: ${task.category === "User Story" ? "#0038ff" : task.category === "Technical Task" ? "#1FD7C1" : "defaultBackgroundColor"};">
                 <p class="badgeText">${task.category}</p>
             </div>
             <div class="cardTextWrapper">
                 <p class="cardHeadline">${task.title}</p>
                 <p class="cardDescription">${task.description}</p>
             </div>
             ${subTaskWrapperHTML}
             <div class="cardFooter">
                 <div id="userCircle" class="avatarWrapper">
                    ${circleTemplate}
                 </div>
                 ${prioSVG}
             </div>
         </div>
       </div>
    `;
}
