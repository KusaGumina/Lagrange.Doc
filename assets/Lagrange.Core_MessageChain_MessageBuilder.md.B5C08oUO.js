import{_ as s,c as a,o as i,a2 as e}from"./chunks/framework.Be7igsT0.js";const u=JSON.parse('{"title":"MessageBuilder 构造消息链","description":"","frontmatter":{},"headers":[],"relativePath":"Lagrange.Core/MessageChain/MessageBuilder.md","filePath":"Lagrange.Core/MessageChain/MessageBuilder.md"}'),t={name:"Lagrange.Core/MessageChain/MessageBuilder.md"},h=e('<h1 id="messagebuilder-构造消息链" tabindex="-1">MessageBuilder 构造消息链 <a class="header-anchor" href="#messagebuilder-构造消息链" aria-label="Permalink to &quot;MessageBuilder 构造消息链&quot;">​</a></h1><p>构造消息链工厂类,根据静态方法的不同返回特定的MessageChain</p><hr><h2 id="构造群聊消息messagechain" tabindex="-1">构造群聊消息MessageChain: <a class="header-anchor" href="#构造群聊消息messagechain" aria-label="Permalink to &quot;构造群聊消息MessageChain:&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> groupMessageChain</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MessageBuilder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_uin)</span></span></code></pre></div><p>该静态方法将接收一个uint作为目标群的群号,返回一个MessageChain实例</p><h2 id="构造私聊消息messagechain" tabindex="-1">构造私聊消息MessageChain: <a class="header-anchor" href="#构造私聊消息messagechain" aria-label="Permalink to &quot;构造私聊消息MessageChain:&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> privateMessageChain</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MessageBuilder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Friend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_uin)</span></span></code></pre></div><p>该静态方法将接收一个uint作为目标用户的uin,返回一个MessageChain实例</p><h2 id="向构造里加入消息实体" tabindex="-1">向构造里加入消息实体 <a class="header-anchor" href="#向构造里加入消息实体" aria-label="Permalink to &quot;向构造里加入消息实体&quot;">​</a></h2><p>采用链式调用的方法向消息内加入内容</p><h3 id="加入文本" tabindex="-1">加入文本 <a class="header-anchor" href="#加入文本" aria-label="Permalink to &quot;加入文本&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_text);</span></span></code></pre></div><p>参数:text:string(消息内容)</p><p>向消息内加入一段文本</p><h3 id="加入图片" tabindex="-1">加入图片 <a class="header-anchor" href="#加入图片" aria-label="Permalink to &quot;加入图片&quot;">​</a></h3><p>该方法有多个重载</p><p>1.指定图片路径(string)的重载</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_filePath);</span></span></code></pre></div><p>2.指定图片二进制(byte[])的重载</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_file);</span></span></code></pre></div><p>向消息内加入一张图片</p><h3 id="加入提及-at" tabindex="-1">加入提及(at) <a class="header-anchor" href="#加入提及-at" aria-label="Permalink to &quot;加入提及(at)&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Mention</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_target);</span></span></code></pre></div><p>参数:target:uint(提及的目标用户),display:string?=null(显示的文本)</p><p>向消息内加入一个提及(at),备选参数display默认为null,会自动补上at目标所显示的文本</p><h3 id="加入表情" tabindex="-1">加入表情 <a class="header-anchor" href="#加入表情" aria-label="Permalink to &quot;加入表情&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Face</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_id);</span></span></code></pre></div><p>参数:id:ushort(表情Id),isLarge:bool=false(是否为大表情)</p><p>向消息内加入一个表情</p><h3 id="加入回复" tabindex="-1">加入回复 <a class="header-anchor" href="#加入回复" aria-label="Permalink to &quot;加入回复&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Forward</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_text);</span></span></code></pre></div><p>参数:target:MessageChain(目标消息)</p><p>让消息回复某个消息</p><p><s>(其实实际上只需要消息的Seq)</s></p><h3 id="加入合并转发" tabindex="-1">加入合并转发 <a class="header-anchor" href="#加入合并转发" aria-label="Permalink to &quot;加入合并转发&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MultiMsg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>N/A</p><p><s>(截至目前我也不会用)</s></p><h3 id="加入xml" tabindex="-1">加入Xml <a class="header-anchor" href="#加入xml" aria-label="Permalink to &quot;加入Xml&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Xml</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_xml);</span></span></code></pre></div><p>参数:xml:string(xml内容)</p><p>向消息内加入一段xml</p><h3 id="加入文件" tabindex="-1">加入文件 <a class="header-anchor" href="#加入文件" aria-label="Permalink to &quot;加入文件&quot;">​</a></h3><p>该方法有多个重载</p><p>1.指定文件路径(string)的重载</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_filePath);</span></span></code></pre></div><p>2.指定文件二进制(byte[])的重载</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_file,_fileName);</span></span></code></pre></div><p>向消息内加入一个文件</p>',50),p=[h];function l(n,r,d,c,k,o){return i(),a("div",null,p)}const E=s(t,[["render",l]]);export{u as __pageData,E as default};
