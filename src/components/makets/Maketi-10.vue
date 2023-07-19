<template>
    <div class="row m-0">
        <div class="col-lg-9">
            <label class="form-label text-truncate w-100" for="tier">10.1 იარუსი</label>

            <select class="form-select" id="tier">
                <option selected>იარუსი</option>
                <option v-for="item in iarusi" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col-lg-3 col-6 mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="frequency">10.2 სიხშირე</label>

            <select class="form-select" id="frequency">
                <option selected>სიხშირე</option>
                <option v-for="item in sixshire" :key="item" :value="item.id">{{item.name}}</option>
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
                <option v-for="item in saxeoba" :key="item" :value="item.id">{{ item.fullname_geo }}</option>
            </select>
        </div>

        <div class="col-lg-1 col-md-4 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="aw">A წ</label>

            <select class="form-select" id="aw">
                <option selected>ხნოვანება</option>
                <option v-for="item in xnovaneba" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col-lg-1 col-md-4 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="hm">H მ</label>

            <select class="form-select" id="hm">
                <option selected>სიმაღლე</option>
                <option v-for="item in simagle" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col-lg-1 col-md-4 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="dsm">D სმ</label>

            <select class="form-select" id="dsm">
                <option selected>დიამეტრი</option>
                <option v-for="item in diametri" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col-lg-2 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="commodity_class">
                სასაქონლო კლასი
            </label>

            <select class="form-select" id="commodity_class">
                <option selected>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>

        <div class="col-lg-2 col-6 mt-3">
            <label class="form-label text-truncate w-100" for="grove_origin">
                კორომის წარმოშობა
            </label>

            <select class="form-select" id="grove_origin">
                <option selected>Open this select menu</option>
                <option value="1">თესლითი</option>
                <option value="2">ამონაყრითი</option>
                <option value="3">ხელოვნური</option>
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
            'dakanebisName',
            'iarusi',
            'sixshire',
            'saxeoba',
            'xnovaneba',
            'simagle',
            'diametri'
        ])
    },

    data() {
        return {}
    }
}
</script>
