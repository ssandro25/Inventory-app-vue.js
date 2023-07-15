<template>
    <div class="row m-0">
        <div class="col-lg-9">
            <label class="form-label text-truncate w-100" for="tier">10.1 იარუსი</label>

            <select class="form-select" id="tier">
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

            <select class="form-select" id="frequency">
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

            <input type="number" class="form-control" id="coefficient"/>
        </div>

        <div class="col-lg-2 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="type">სახეობა</label>

            <select class="form-select" id="type">
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

            <select class="form-select" id="aw">
                <option selected>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
            </select>
        </div>

        <div class="col-lg-1 col-md-4 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="hm">H მ</label>

            <select class="form-select" id="hm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>

        <div class="col-lg-1 col-md-4 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="dsm">D სმ</label>

            <select class="form-select" id="dsm">
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

        <table class="table mt-5 fs-12">
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>

        <div>
            {{ dakanebisName }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Maketi-10',

    computed: {
        ...mapGetters([
            'dakanebisName'
        ])
    },

    data() {
        return {}
    }
}
</script>
