<template>
    <div>
        <div class="container">
     
            <div class="pageContainer">
                <ul id="myTab" class="nav nav-tabs">
                <li class="active">
                    <a href="#home" data-toggle="tab">
                        商业险
                    </a>
                </li>
                <li>
                    <a href="#ios" data-toggle="tab">强制险</a>
                </li>
                <li>
                    <a href="#ios" data-toggle="tab">验车</a>
                </li>
                
                    <form class="navbar-form navbar-right" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search"></div>
                            <button type="submit" class="btn btn-default">提交</button>
                        </form>
                    
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="home">
                        
                    </div>
                    <div class="tab-pane fade" id="ios">
                        <p>iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple TV。iOS 派生自
                            OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。</p>
                    </div>
                    <div class="tab-pane fade" id="jmeter">
                        <p>jMeter 是一款开源的测试软件。它是 100% 纯 Java 应用程序，用于负载和性能测试。</p>
                    </div>
                    <div class="tab-pane fade" id="ejb">
                        <p>Enterprise Java Beans（EJB）是一个创建高度可扩展性和强大企业级应用程序的开发架构，部署在兼容应用程序服务器（比如
                            JBOSS、Web Logic 等）的 J2EE 上。
                        </p>
                    </div>
                </div>
            </div>
            

            </div>
            </div>
        </template>
        <script>
            export default {
                name: 'HomePage',
                data() {
                    return {
                        cur: 1,
                        showTail: true,
                        showMorePre: false,
                        showMoreTail: false,
                        message: 'homepage',
                        bills: []
                    }
                },
                created() {
                    this
                        .$http
                        .get("http://localhost:3000/bills")
                        .then((data) => {
                            console.log(data)
                            this.bills = data.body
                        })
                },
                methods: {
                    loadbill: function () {
                        this
                            .$http
                            .get("http://localhost:3000/bills")
                            .then((data) => {
                                console.log(data.body[1])
                            })
                    }
                }
            }
        </script>
        <style scoped="scoped"></style>

        