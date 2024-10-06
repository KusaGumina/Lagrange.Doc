import{_ as t,c as e,o as s,a4 as i}from"./chunks/framework.DUCr4ECn.js";const E=JSON.parse('{"title":"事件","description":"","frontmatter":{},"headers":[],"relativePath":"LagrangeGo/Event/index.md","filePath":"LagrangeGo/Event/index.md","lastUpdated":1728189779000}'),a={name:"LagrangeGo/Event/index.md"},n=i(`<h1 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h1><p>LagrangeGo使用的是事件订阅机制</p><p>方法签名:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EventHandle[T].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Subscribe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">client</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QQClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p>示例</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">qqclient.GroupMessageEvent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Subscribe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">client</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QQClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GroupMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 你可以从event中获取事件的各个参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 这段代码会将群聊收到的消息打印出来</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>目前支持的EventHandle</p><table><thead><tr><th style="text-align:center;">EventHandle[T]</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>EventHandle[*message.GroupMessage]</code></td><td style="text-align:center;">群聊消息事件</td></tr><tr><td style="text-align:center;"><code>PrivateMessageEvent[*message.PrivateMessage]</code></td><td style="text-align:center;">私聊消息事件</td></tr><tr><td style="text-align:center;"><code>TempMessageEvent[*message.TempMessage]</code></td><td style="text-align:center;">临时会话消息事件</td></tr><tr><td style="text-align:center;"><code>GroupInvitedEvent[*event.GroupInvite]</code></td><td style="text-align:center;">被邀请入群</td></tr><tr><td style="text-align:center;"><code>GroupMemberJoinRequestEvent[*event.GroupMemberJoinRequest]</code></td><td style="text-align:center;">加群申请</td></tr><tr><td style="text-align:center;"><code>GroupMemberJoinEvent[*event.GroupMemberIncrease]</code></td><td style="text-align:center;">成员入群</td></tr><tr><td style="text-align:center;"><code>GroupMemberLeaveEvent[*event.GroupMemberDecrease]</code></td><td style="text-align:center;">成员退群</td></tr><tr><td style="text-align:center;"><code>GroupMuteEvent[*event.GroupMute]</code></td><td style="text-align:center;">群聊禁言</td></tr><tr><td style="text-align:center;"><code>GroupRecallEvent[*event.GroupRecall]</code></td><td style="text-align:center;">群聊撤回消息</td></tr><tr><td style="text-align:center;"><code>FriendRequestEvent[*event.FriendRequest]</code></td><td style="text-align:center;">好友申请</td></tr><tr><td style="text-align:center;"><code>FriendRecallEvent[*event.FriendRecall]</code></td><td style="text-align:center;">好友消息撤回</td></tr><tr><td style="text-align:center;"><code>RenameEvent[*event.Rename]</code></td><td style="text-align:center;">昵称变动</td></tr></tbody></table>`,8),l=[n];function d(r,h,p,k,c,g){return s(),e("div",null,l)}const y=t(a,[["render",d]]);export{E as __pageData,y as default};
