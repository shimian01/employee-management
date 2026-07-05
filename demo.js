import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
        createApp({
            data() {
                return {
                    searchform: {
                        name: '',
                        gender: '',
                        job: ''
                    },
                    items: []
                }
            },
            
            //钩子函数
            mounted() {
                console.log('准备完毕，准备请求数据');
                this.search();
            },
            methods: {
                async search() {
                    var med = {};
                    if (this.searchform.name) med.name = this.searchform.name;
                    if (this.searchform.gender) med.gender = this.searchform.gender;
                    if (this.searchform.job) med.job = this.searchform.job;

                    //一般的异步方法
                    // axios.get('http://localhost:3000/employees',{params:med}).then( res => {
                    //     this.items = res.data;
                    // }).catch((err) => {
                    //     console.log('请求失败', err);
                    // })

                    //便于维护，增强可读性
                    let result = await axios.get('http://localhost:3000/employees', { params: med });
                    this.items = result.data;
                },
                clear(){
                    this.searchform = { name: '', gender: '', job: '' };
                    this.search();
                },
                async addchild(){
                    let result = await axios.post('http://localhost:3000/employees', {
                        name: "请输入",
                        gender: 1,
                        job: "请输入",
                        intime: "-",
                        lasttime: "-"
                    });
                    this.items.push(result.data);
                },
                async change(i){
                    var item = this.items[i];
                    var nn = prompt('请输入姓名',item.name);
                    if(nn != null){
                        item.name = nn;
                    }
                    var gg = prompt('请输入性别','男/女');
                    if(gg != null){
                        if(gg == '男') item.gender = 1;
                        else item.gender = 2;
                    }
                    var jj = prompt('请输入职位',item.job);
                    if(jj != null){
                        item.job = jj;
                    }
                    var tt = prompt('请输入入职时间',item.intime);
                    if(tt != null){
                        item.intime = tt;
                    }
                    item.lasttime = this.getnowtime();
                    let res = await axios.put(`http://localhost:3000/employees/${item.id}`, item);
                    this.items.splice(i, 1, res.data);
                },
                async chdelete(i) {
                    var item = this.items[i];
                    if(confirm('确定删除'+this.items[i].name+'吗')){
                        await axios.delete(`http://localhost:3000/employees/${item.id}`);
                        this.item.splice(i, 1);
                    }
                },
                getnowtime(){
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth() + 1;
                var day = now.getDate();
                var nt = year + '-' + month + '-' + day;
                return nt;
                }
            },
        }).mount('#app')


//        axios({
//            method: 'GET',
//            url: 'https://web-server.itheima.net/emps/list'
//        }).then((result) => {
//            console.log(result.data);
//        }).catch((err) => {
//            alert(err);
//        });

//    </script>