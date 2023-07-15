<template>
    <div class="row m-0">
        <div class="col-lg-9">
            <label class="form-label text-truncate w-100" for="tier">10.1 იარუსი</label>

            <select class="form-select" id="tier" v-model="iarusi">
                <option selected>იარუსი</option>
                <option>1 - კორომის პირველი იარუსი</option>
                <option>2 - კორომის მეორე იარუსი</option>
                <option>3 - ნაბელი კორომი</option>
                <option>4 - ვარჯშეუკვრელი კულტურები ტყით დაუფარავ მიწებზე</option>
                <option>5 - ბუნებრივი განახლება ტყის კულტურებში</option>
                <option>6 - ვარჯშეუკვრელი კულტურები საბურველ ქვეშ</option>
                <option>7 - ვარჯშეუკვრელი კულტურები კორომის რეკონსტრუქციის შედეგად</option>
                <option>8 - ბუნებრივი მეჩხერი და დაბალი სიხშირის კორომები </option>
                <option>9 - ერთეული ხეები</option>
                <option>10 - ბაღები</option>
                <option>13 - კორომის დაღუპული ნაწილი</option>
                <option>15 - ფაუტი კორომში</option>
            </select>
        </div>

        <div class="col-lg-3 col-6 mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="frequency">10.2 სიხშირე</label>

            <select class="form-select" id="frequency" v-model="sixshire">
                <option selected>სიხშირე</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>1</option>
            </select>
        </div>

        <div class="col-lg-1 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="coefficient">კოეფ.</label>

            <input type="number" class="form-control" id="coefficient" v-model="koeficienti"/>
        </div>

        <div class="col-lg-2 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="type">სახეობა</label>

            <select class="form-select" id="type" v-model='saxeoba'>
                <option selected>სახეობა #1</option>
                <option>ნძ</option>
                <option>სჭ</option>
                <option>ფჭ</option>
                <option>წფ</option>
                <option>წფა</option>
                <option>რც</option>
                <option>რცა</option>
                <option>მხ</option>
                <option>მხა</option>
                <option>იფ</option>
                <option>ნკ</option>
                <option>ნკა</option>
                <option>წბ</option>
                <option>წბა</option>
                <option>აკ</option>
                <option>აკა</option>
                <option>ჯგ</option>
                <option>ვრხ</option>
                <option>თლ</option>
                <option>თხმ</option>
                <option>თხმა</option>
                <option>ცხ</option>
                <option>კკხ</option>
                <option>პნ</option>
                <option>მჟლ</option>
                <option>კრპ</option>
                <option>ევკ</option>
                <option>ლილ</option>
                <option>ალნ</option>
                <option>არყ</option>
                <option>მდგ</option>
                <option>თხ</option>
                <option>წყ</option>
                <option>შქრ</option>
                <option>ბმბმ</option>
            </select>
        </div>

        <div class="col-lg-1 col-md-4 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="aw">A წ</label>

            <select class="form-select" id="aw" v-model="xnovaneba_weli">
                <option selected>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
            </select>
        </div>

        <div class="col-lg-1 col-md-4 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="hm">H მ</label>

            <select class="form-select" id="hm" v-model="simagle">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>

        <div class="col-lg-1 col-md-4 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="dsm">D სმ</label>

            <select class="form-select" id="dsm" v-model="diametri">
                <option>8</option>
                <option>10</option>
                <option>12</option>
                <option>14</option>
            </select>
        </div>

        <div class="col-lg-2 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="commodity_class">სასაქონლო
                კლასი
            </label>

            <select class="form-select" id="commodity_class">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>

        <div class="col-lg-2 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="grove_origin">კორომის
                წარმოშობა</label>

            <select class="form-select" id="grove_origin">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>

        <div class="col-lg-1 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="stock">მარაგი</label>

            <input type="number" class="form-control" id="stock" disabled/>
        </div>

        <div class="col-lg-1 col-6 mt-3">
            <label class="form-label text-truncate w-100">ss</label>

            <button type="button" class="btn btn-success w-100">ADD</button>
        </div>

        <div>
            <p class="fs-1">TEST!!!!!</p>
            <select class="form-select">
                <option v-for="item in test" :key="item" :value="item.ghonisdzieba_id">{{ item.ghonisdzieba_name }}</option>
            </select>
        </div>

        <table class="table mt-5">
            <thead>
            <tr>
                <th>იარუსი</th>
                <th>სიხშირე</th>
                <th>კოეფიციენი</th>
                <th>მერქ. სახეობა</th>
                <th>A წელი</th>
                <th>H მ</th>
                <th>D მ</th>
                <th>სასაქონლო კლასი</th>
                <th>წარმოშობა</th>
                <th>მგ</th>
                <th>მარაგი</th>
                <th>მარაგი 33/ჰა</th>
                <th>წაშლა</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{{ iarusi }}</td>
                <td>{{ sixshire }}</td>
                <td>{{ koeficienti }}</td>
                <td>{{ saxeoba }}</td>
                <td>{{ xnovaneba_weli }}</td>
                <td>{{ simagle }}</td>
                <td>{{ diametri }}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Maketi-10',

    data() {
        return {
            iarusi: '',
            sixshire: '',
            koeficienti: '',
            saxeoba: '',
            xnovaneba_weli: '',
            simagle: '',
            diametri: '',
            test: [
                {ghonisdzieba_name: 'თანდათანობითი ორ ჯერიანი ჭრა', ghonisdzieba_id: '5'},
                {ghonisdzieba_name: 'ჯგუფურ-ამორჩვეითი ჭრა', ghonisdzieba_id: '7'},
                {ghonisdzieba_name: 'ნებით-ამორჩევითი ჭრა', ghonisdzieba_id: '8'},
                {ghonisdzieba_name: 'დაავადებული ხეების ჭრა', ghonisdzieba_id: '11'},
                {ghonisdzieba_name: 'რეკონსტრუქციული პირწმინდა ჭრა ', ghonisdzieba_id: '12'},
                {ghonisdzieba_name: 'რეკონსტრუქციული ნაწილობრივი ჭრა', ghonisdzieba_id: '13'},
                {ghonisdzieba_name: 'სპეციალური ჭრა ამორჩევით', ghonisdzieba_id: '14'},
                {ghonisdzieba_name: 'მარადმწვანე ქვეტყის ჭრა ზოლებად', ghonisdzieba_id: '15'},
                {ghonisdzieba_name: 'სანიტარილი ჭრა', ghonisdzieba_id: '16'},
                {ghonisdzieba_name: 'ჩახერგილობის გაწმენდა', ghonisdzieba_id: '17'},
                {ghonisdzieba_name: 'ზეხმელის ჭრა', ghonisdzieba_id: '18'},
                {ghonisdzieba_name: 'სპეციალური პირწმინდა ჭრა', ghonisdzieba_id: '19'},
                {ghonisdzieba_name: 'განათებითი ჭრა', ghonisdzieba_id: '20'},
                {ghonisdzieba_name: 'გაწმენდითი ჭრა', ghonisdzieba_id: '25'},
                {ghonisdzieba_name: 'გამოხშირვითი ჭრა', ghonisdzieba_id: '30'},
                {ghonisdzieba_name: 'გავლითი ჭრა', ghonisdzieba_id: '35'},
                {ghonisdzieba_name: 'ერთეული ხეების ჭრა', ghonisdzieba_id: '36'},
                {ghonisdzieba_name: 'ტყის კულტურები ღია ფართობზე', ghonisdzieba_id: '50'},
                {ghonisdzieba_name: 'ტყის კულტურების რეკონსტრუქცია', ghonisdzieba_id: '51'},
                {ghonisdzieba_name: 'მინერალიზაცია ნიადაგის', ghonisdzieba_id: '55'},
                {ghonisdzieba_name: 'ბუნებრივი განახლების ხელისშეწყობა აჩიჩქვნა', ghonisdzieba_id: '56'},
                {ghonisdzieba_name: 'ტყის კულტურების მოვლა', ghonisdzieba_id: '57'},
                {ghonisdzieba_name: 'ბუნებრივი განახლების ხელისშეწყობა შეღობვა', ghonisdzieba_id: '60'},
                {ghonisdzieba_name: 'ტყის კულტურების დამატება', ghonisdzieba_id: '64'}
            ]
        }
    }
}
</script>
