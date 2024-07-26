import{_ as l,c as a,o as i,a6 as e}from"./chunks/framework.dE-icjW7.js";const u=JSON.parse('{"title":"DNS","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"408/408-cn07.md","filePath":"408/408-cn07.md","lastUpdated":null}'),o={name:"408/408-cn07.md"},t=e('<h1 id="dns" tabindex="-1">DNS <a class="header-anchor" href="#dns" aria-label="Permalink to &quot;DNS&quot;">​</a></h1><h2 id="dns-解析" tabindex="-1">DNS 解析 <a class="header-anchor" href="#dns-解析" aria-label="Permalink to &quot;DNS 解析&quot;">​</a></h2><p><a href="https://www.zhihu.com/question/23042131" target="_blank" rel="noreferrer">https://www.zhihu.com/question/23042131</a></p><h2 id="dns-劫持" tabindex="-1">DNS 劫持 <a class="header-anchor" href="#dns-劫持" aria-label="Permalink to &quot;DNS 劫持&quot;">​</a></h2><p>DNS劫持，也称为域名劫持或DNS重定向，是一种网络攻击手段，攻击者通过技术手段篡改正确域名和IP地址之间的映射关系，使得用户在访问某个网站时被重定向到攻击者控制的服务器。</p><h3 id="dns劫持的目的" tabindex="-1">DNS劫持的目的 <a class="header-anchor" href="#dns劫持的目的" aria-label="Permalink to &quot;DNS劫持的目的&quot;">​</a></h3><ol><li><p>欺诈和广告：在用户访问的页面上显示额外的广告内容，以赚取广告收入。</p></li><li><p>网络钓鱼：创建假冒的网站，诱使用户输入敏感信息，如用户名、密码或信用卡信息。</p></li><li><p>数据窃取：通过重定向用户到恶意网站，窃取用户的个人信息或数字资产。</p></li></ol><h3 id="dns劫持的手段" tabindex="-1">DNS劫持的手段 <a class="header-anchor" href="#dns劫持的手段" aria-label="Permalink to &quot;DNS劫持的手段&quot;">​</a></h3><ol><li><p>本地DNS劫持：通过木马病毒或恶意软件篡改用户的DNS设置，或者利用路由器漏洞修改路由器的DNS配置。</p></li><li><p>DNS解析路径劫持：在DNS查询过程中，通过技术手段（如中间人攻击）将DNS流量重定向到攻击者的DNS服务器。</p></li><li><p>篡改DNS权威记录：攻击者非法入侵DNS权威记录管理账号，直接修改DNS记录，将域名解析到恶意服务器。</p></li></ol><h3 id="dns劫持防御" tabindex="-1">DNS劫持防御 <a class="header-anchor" href="#dns劫持防御" aria-label="Permalink to &quot;DNS劫持防御&quot;">​</a></h3><ol><li><p>安全软件：安装和更新杀毒软件，防止病毒和恶意软件篡改DNS设置。</p></li><li><p>路由器安全：定期更新路由器固件，修改默认或弱密码，以防止未经授权的访问。</p></li><li><p>DNSSEC：使用DNS安全扩展（DNSSEC）技术，为域名提供额外的安全层，确保DNS数据的完整性和真实性。</p></li><li><p>DNS加密：使用DNS-over-TLS或DNS-over-HTTPS等技术，对DNS查询和响应进行加密，防止中间人攻击。</p></li><li><p>监控和检测：定期检查DNS解析结果，使用工具如阿里云的DNS域名检测工具来检测潜在的DNS劫持行为。</p></li></ol><h3 id="dns劫持排查" tabindex="-1">DNS劫持排查 <a class="header-anchor" href="#dns劫持排查" aria-label="Permalink to &quot;DNS劫持排查&quot;">​</a></h3><ol><li>检查DNS解析结果：</li></ol><ul><li>使用命令行工具（如Windows的cmd或Mac/Linux的terminal）输入nslookup命令，后面跟上你想要检查的域名。这将显示该域名解析到的IP地址。</li><li>然后，你可以更换DNS服务器，例如使用Google的公共DNS（8.8.8.8）或Cloudflare的DNS（1.1.1.1），再次执行nslookup命令，看看解析结果是否一致。</li></ul><ol start="2"><li>使用不同的网络连接：</li></ol><ul><li>在不同的网络环境下（例如使用移动数据或切换到另一个Wi-Fi网络）重复上述步骤，如果解析结果在不同网络下不一致，可能存在DNS劫持。</li></ul><ol start="3"><li>检查路由器设置：</li></ol><ul><li>登录到你的路由器管理界面，查看DNS设置是否被更改。如果发现DNS服务器地址被设置为未知或可疑的地址，这可能是DNS劫持的迹象。</li></ul><ol start="4"><li>清除DNS缓存：</li></ol><ul><li>在Windows系统中，可以使用命令ipconfig /flushdns来清除DNS缓存。在MacOS中，可以使用sudo killall -HUP mDNSResponder命令。清除缓存后，重新检查DNS解析结果。</li></ul><ol start="5"><li>使用安全软件：</li></ol><ul><li>运行安全软件进行全面扫描，检查是否有恶意软件或病毒可能篡改了DNS设置。</li></ul><ol start="6"><li>咨询ISP：</li></ol><ul><li>如果以上步骤都无法解决问题，可以联系你的互联网服务提供商（ISP），询问是否有已知的DNS问题或服务中断。 通过这些步骤，你可以排查是否存在DNS劫持的情况。如果确认存在劫持，应采取相应措施，如更改DNS服务器地址、重置路由器设置或联系ISP寻求帮助。</li></ul>',24),n=[t];function r(S,s,d,N,D,h){return i(),a("div",null,n)}const c=l(o,[["render",r]]);export{u as __pageData,c as default};
