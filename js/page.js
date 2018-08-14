$(document).ready(function () {
    var no = 2;
    var action = false;

    var income = '8000',
        cost = '7900';

    $('#income').html('<b>income: </b>' + income + '$');
    $('#pure_in').html('<b>pure_income: </b>' + (income - cost) + '$');
    $('#cost').html('<b>cost: </b>' + cost + '$');

    var list = [{ item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'stuuudy', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' },
    { item_name: 'study', time: '2018.01.21', count: '2000', person_name: 'xdd' }];


    list.forEach(function (item, index, arr) {
        var dom = '<tr><td>' + (index + 1) + '</td>' + '<td>' + item.item_name + '</td>' + '<td>' + item.time + '</td><td>' + item.count + '</td><td>' + item.person_name + '</td></tr>';
        $('#list').append(dom);
    });




    function next() {
        if (!action) {
            action = true;
            var active_no = no;
            var imgs = $('.slide').children().not('span').not('.support_height');
            no = (no + 1) % imgs.length;
            imgs.eq((active_no + imgs.length - 1) % imgs.length).animate({
                left: '-20%'
            }, 'slow', function () {
                imgs.eq((active_no + imgs.length - 1) % imgs.length).removeClass().addClass('wait_img pre_wait');
                imgs.eq((active_no + imgs.length - 1) % imgs.length).removeAttr('style');
            });

            imgs.eq(active_no).animate({
                left: '5%',
                width: '15%',
                opacity: '0.4',
                border: '1px solid #312f2f',
                borderRadius: '3px',
            }, 'slow', function () {
                imgs.eq(active_no).removeClass().addClass('pre_img');
                imgs.eq(active_no).removeAttr('style');
            });


            imgs.eq((active_no + imgs.length + 1) % imgs.length).animate({
                left: '25%',
                width: '50%',
                opacity: '1',
                border: '3px solid #312f2f',
                borderRadius: '9px'
            }, 'slow', function () {
                imgs.eq((active_no + imgs.length + 1) % imgs.length).removeClass().addClass('active_img');
                imgs.eq((active_no + imgs.length + 1) % imgs.length).removeAttr('style');

            });
            imgs.eq((active_no + imgs.length + 2) % imgs.length).animate({
                right: '5%'
            }, 'slow', function () {
                imgs.eq((active_no + imgs.length + 2) % imgs.length).removeClass().addClass('next_img');
                imgs.eq((active_no + imgs.length + 2) % imgs.length).removeAttr('style');
                imgs.eq((active_no + imgs.length - 2) % imgs.length).removeClass().addClass('wait_img next_wait');
                action = false;
            })
        } else {

        }
    }


    $('.next_btn').click(next);

    /*   ***********************************************************************    */

    function pre() {
        if (!action) {
            action = true;
            var active_no = no;
            var imgs = $('.slide').children().not('span').not('.support_height');
            no = (no - 1 + imgs.length) % imgs.length;
            imgs.eq((active_no + imgs.length + 1) % imgs.length).animate({
                right: '-20%'
            }, 'slow', function () {
                imgs.eq((active_no + imgs.length + 1) % imgs.length).removeClass().addClass('wait_img next_wait');
                imgs.eq((active_no + imgs.length + 1) % imgs.length).removeAttr('style');
            });

            imgs.eq(active_no).animate({
                left: '80%',
                width: '15%',
                opacity: '0.4',
                border: '1px solid #312f2f',
                borderRadius: '3px',
            }, 'slow', function () {
                imgs.eq(active_no).removeClass().addClass('next_img');
                imgs.eq(active_no).removeAttr('style');
            });


            imgs.eq((active_no + imgs.length - 1) % imgs.length).animate({
                left: '25%',
                width: '50%',
                opacity: '1',
                border: '3px solid #312f2f',
                borderRadius: '9px'
            }, 'slow', function () {
                imgs.eq((active_no + imgs.length - 1) % imgs.length).removeClass().addClass('active_img');
                imgs.eq((active_no + imgs.length - 1) % imgs.length).removeAttr('style');

            });
            imgs.eq((active_no + imgs.length - 2) % imgs.length).animate({
                left: '5%'
            }, 'slow', function () {
                imgs.eq((active_no + imgs.length - 2) % imgs.length).removeClass().addClass('pre_img');
                imgs.eq((active_no + imgs.length - 2) % imgs.length).removeAttr('style');
                imgs.eq((active_no + imgs.length - 3) % imgs.length).removeClass().addClass('wait_img pre_wait');
                imgs.eq((active_no + imgs.length - 3) % imgs.length).removeAttr('style')
                action = false;
            })
        } else {

        }
    }
    $('.pre_btn').click(pre);


    var slide_ani = null;
    /******************************************/
    $('.slide').mouseenter(function () {
        $('.slide_btn').css('visibility', 'visible');
        clearInterval(slide_ani);
    });
    $('.slide').mouseleave(function () {
        $('.slide_btn').css('visibility', 'hidden');
        slide_ani = setInterval(next, 5000);
    });


    $('#login').click(function () {
        $('.login_page').css('display', 'block');
        $('body').css('overflow', 'hidden');
    });

    $('#login_close').click(function () {
        $('.login_page').css('display', 'none');
        $('body').css('overflow', 'visible');
    })


    $('#register').click(function () {
        $('.register_page').css('display', 'block');
        $('body').css('overflow', 'hidden');
    });
    $('#reg_close').click(function () {
        $('.register_page').css('display', 'none');
        $('body').css('overflow', 'visible');
    });
    

    function test(id,reg){
        var re=new RegExp(reg,'i');
        var ele=$('#'+id);
        if(re.test(ele.val())){
            ele.css('box-shadow','none');
            return true;
        }else{
            ele.css('box-shadow','0px 0px 2px 2px red');
            return false;
        }
    }


    function reg_test(){
        var test_arr=new Array(7);
        $("#reg_account").blur(function(){
            test_arr[0]=test("reg_account",'\\w{3,8}');
        });

        $('#reg_name').blur(function(){
            test_arr[1]=test("reg_name",".+");
        });

        $("#reg_stu_no").blur(function(){
            test_arr[2]=test("reg_stu_no","^[A-Z]\\d{9}$");
        });

        $("#reg_college").blur(function(){
            test_arr[3]=test("reg_college",".+");
        });

        $("#reg_phone").blur(function(){
            test_arr[4]=test("reg_phone","^[1]\\d{10}");
        });

        $("#reg_password").blur(function(){
            test_arr[5]=test("reg_password","\\w{6,11}");
            if(test_arr[5]){
                var make_sure=$("#reg_makesure_password");
                if(make_sure.val()){
                    if(make_sure.val()==$(this).val()){
                        make_sure.css('box-shadow','none');
                    }else{
                        test_arr[6]==false;
                        make_sure.css('box-shadow','0px 0px 2px 2px red');
                        make_sure.val("");
                        make_sure.attr("placeholder","密码不一致");
                    }

                }else{
                    
                }
            }
        });

        $("#reg_makesure_password").blur(function(){
            test_arr[6]=($(this).val()==$("#reg_password").val());
            if(test_arr[6]){
                $(this).css('box-shadow','none');
            }else{
                $(this).css('box-shadow','0px 0px 2px 2px red');
                $(this).val("");
                $(this).attr("placeholder","密码不一致");
            }

        });
    }

    reg_test();


});