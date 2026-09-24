

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { QuotesOnDesignSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('PostEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when QUOTES_ON_DESIGN_TEST_LIVE=TRUE.
  afterEach(liveDelay('QUOTES_ON_DESIGN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = QuotesOnDesignSDK.test()
    const ent = testsdk.Post()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.QUOTES_ON_DESIGN_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'post.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author":{"a":true,"h":"Author","n":"author","r":false,"sh":"The ID for the author of the post","t":"`$INTEGER`","key$":"author","index$":0},"categories":{"a":true,"h":"Categories","n":"categories","r":false,"sh":"The terms assigned to the post in the category taxonomy","t":"`$ARRAY`","key$":"categories","index$":1},"comment_status":{"a":true,"h":"Comment Status","n":"comment_status","r":false,"sh":"Whether or not comments are open on the post","t":"`$STRING`","key$":"comment_status","index$":2},"content":{"a":true,"h":"Content","n":"content","r":false,"t":"`$OBJECT`","key$":"content","index$":3},"date":{"a":true,"fo":"date-time","h":"Date","n":"date","r":false,"sh":"The date the post was published, in the site's timezone","t":"`$STRING`","key$":"date","index$":4},"date_gmt":{"a":true,"fo":"date-time","h":"Date Gmt","n":"date_gmt","r":false,"sh":"The date the post was published, as GMT","t":"`$STRING`","key$":"date_gmt","index$":5},"excerpt":{"a":true,"h":"Excerpt","n":"excerpt","r":false,"t":"`$OBJECT`","key$":"excerpt","index$":6},"featured_media":{"a":true,"h":"Featured Media","n":"featured_media","r":false,"sh":"The ID of the featured media for the post","t":"`$INTEGER`","key$":"featured_media","index$":7},"format":{"a":true,"h":"Format","n":"format","r":false,"sh":"The format for the post","t":"`$STRING`","key$":"format","index$":8},"guid":{"a":true,"h":"Guid","n":"guid","r":false,"t":"`$OBJECT`","key$":"guid","index$":9},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the post","t":"`$INTEGER`","key$":"id","index$":10},"link":{"a":true,"fo":"uri","h":"Link","n":"link","r":false,"sh":"URL to the post","t":"`$STRING`","key$":"link","index$":11},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"sh":"Meta fields","t":"`$OBJECT`","key$":"meta","index$":12},"modified":{"a":true,"fo":"date-time","h":"Modified","n":"modified","r":false,"sh":"The date the post was last modified, in the site's timezone","t":"`$STRING`","key$":"modified","index$":13},"modified_gmt":{"a":true,"fo":"date-time","h":"Modified Gmt","n":"modified_gmt","r":false,"sh":"The date the post was last modified, as GMT","t":"`$STRING`","key$":"modified_gmt","index$":14},"ping_status":{"a":true,"h":"Ping Status","n":"ping_status","r":false,"sh":"Whether or not the post can be pinged","t":"`$STRING`","key$":"ping_status","index$":15},"slug":{"a":true,"h":"Slug","n":"slug","r":false,"sh":"An alphanumeric identifier for the post unique to its type","t":"`$STRING`","key$":"slug","index$":16},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"A named status for the post","t":"`$STRING`","key$":"status","index$":17},"sticky":{"a":true,"h":"Sticky","n":"sticky","r":false,"sh":"Whether or not the post should be treated as sticky","t":"`$BOOLEAN`","key$":"sticky","index$":18},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"The terms assigned to the post in the post_tag taxonomy","t":"`$ARRAY`","key$":"tags","index$":19},"template":{"a":true,"h":"Template","n":"template","r":false,"sh":"The theme file to use to display the post","t":"`$STRING`","key$":"template","index$":20},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$OBJECT`","key$":"title","index$":21},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type of post","t":"`$STRING`","key$":"type","index$":22}},"id":{"field":"id","name":"id"},"name":"post","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /posts/","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":false,"k":"query","n":"embed","or":"embed","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":"date","k":"query","n":"orderby","or":"orderby","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":10,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/posts/","q":{"exist":["embed","orderby","page","per_page"]},"r":{},"s":[{"lit":"posts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /posts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"embed","or":"embed","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/posts/{id}","q":{"exist":["embed","id"]},"r":{},"s":[{"lit":"posts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"post","name__orig":"post","Name":"Post","name_":"post","name-":"post","NAME":"POST","index$":0}, {"active":true,"entity":"post","key$":"BasicPostFlow","kind":"basic","name":"BasicPostFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"post_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"post_ref01","srcdatavar":"post_ref01_data","suffix":"_dt0"},"m":{"id":"post01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-post_ref01"}}],"index$":1}]}, 'Post', {"GET /posts/":{"protocol":"http","operationId":"getPosts","responses":{"200":{"description":"Successful response with an array of quote posts","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","description":"Unique identifier for the post","key$":"id"},"date":{"type":"string","format":"date-time","description":"The date the post was published, in the site's timezone","key$":"date"},"date_gmt":{"type":"string","format":"date-time","description":"The date the post was published, as GMT","key$":"date_gmt"},"guid":{"type":"object","properties":{"rendered":{"type":"string","description":"GUID for the post, as it exists in the database"}},"key$":"guid"},"modified":{"type":"string","format":"date-time","description":"The date the post was last modified, in the site's timezone","key$":"modified"},"modified_gmt":{"type":"string","format":"date-time","description":"The date the post was last modified, as GMT","key$":"modified_gmt"},"slug":{"type":"string","description":"An alphanumeric identifier for the post unique to its type","key$":"slug"},"status":{"type":"string","description":"A named status for the post","key$":"status"},"type":{"type":"string","description":"Type of post","key$":"type"},"link":{"type":"string","format":"uri","description":"URL to the post","key$":"link"},"title":{"type":"object","properties":{"rendered":{"type":"string","description":"HTML title for the post, transformed for display"}},"key$":"title"},"content":{"type":"object","properties":{"rendered":{"type":"string","description":"HTML content for the post, transformed for display"},"protected":{"type":"boolean","description":"Whether the content is protected with a password"}},"key$":"content"},"excerpt":{"type":"object","properties":{"rendered":{"type":"string","description":"HTML excerpt for the post, transformed for display"},"protected":{"type":"boolean","description":"Whether the excerpt is protected with a password"}},"key$":"excerpt"},"author":{"type":"integer","description":"The ID for the author of the post","key$":"author"},"featured_media":{"type":"integer","description":"The ID of the featured media for the post","key$":"featured_media"},"comment_status":{"type":"string","description":"Whether or not comments are open on the post","key$":"comment_status"},"ping_status":{"type":"string","description":"Whether or not the post can be pinged","key$":"ping_status"},"sticky":{"type":"boolean","description":"Whether or not the post should be treated as sticky","key$":"sticky"},"template":{"type":"string","description":"The theme file to use to display the post","key$":"template"},"format":{"type":"string","description":"The format for the post","key$":"format"},"meta":{"type":"object","description":"Meta fields","key$":"meta"},"categories":{"type":"array","items":{"type":"integer"},"description":"The terms assigned to the post in the category taxonomy","key$":"categories"},"tags":{"type":"array","items":{"type":"integer"},"description":"The terms assigned to the post in the post_tag taxonomy","key$":"tags"}},"x-ref":"#/components/schemas/Post","index$":0}},"example":[{"id":1234,"date":"2023-01-15T10:30:00","date_gmt":"2023-01-15T10:30:00","modified":"2023-01-15T10:30:00","modified_gmt":"2023-01-15T10:30:00","slug":"sample-design-quote","status":"publish","type":"post","link":"https://quotesondesign.com/sample-design-quote/","title":{"rendered":"Author Name"},"content":{"rendered":"<p>Design is not just what it looks like and feels like. Design is how it works.</p>","protected":false},"excerpt":{"rendered":"<p>Design is not just what it looks like and feels like.</p>","protected":false}}]}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Error message"},"data":{"type":"object","properties":{"status":{"type":"integer","description":"HTTP status code"}}}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Error message"},"data":{"type":"object","properties":{"status":{"type":"integer","description":"HTTP status code"}}}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"orderby","in":"query","description":"Order posts by a specific field. Use 'rand' for randomized results.","required":false,"schema":{"type":"string","enum":["date","id","title","rand"],"default":"date"},"index$":0},{"name":"per_page","in":"query","description":"Number of posts to retrieve per page","required":false,"schema":{"type":"integer","minimum":1,"maximum":100,"default":10},"index$":1},{"name":"page","in":"query","description":"Page number of results to retrieve","required":false,"schema":{"type":"integer","minimum":1,"default":1},"index$":2},{"name":"_embed","in":"query","description":"Include embedded resources in the response","required":false,"schema":{"type":"boolean","default":false},"index$":3}],"securitySource":"unspecified"},"GET /posts/{id}":{"protocol":"http","operationId":"getPostById","responses":{"200":{"description":"Successful response with a single quote post","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","description":"Unique identifier for the post","key$":"id"},"date":{"type":"string","format":"date-time","description":"The date the post was published, in the site's timezone","key$":"date"},"date_gmt":{"type":"string","format":"date-time","description":"The date the post was published, as GMT","key$":"date_gmt"},"guid":{"type":"object","properties":{"rendered":{"type":"string","description":"GUID for the post, as it exists in the database"}},"key$":"guid"},"modified":{"type":"string","format":"date-time","description":"The date the post was last modified, in the site's timezone","key$":"modified"},"modified_gmt":{"type":"string","format":"date-time","description":"The date the post was last modified, as GMT","key$":"modified_gmt"},"slug":{"type":"string","description":"An alphanumeric identifier for the post unique to its type","key$":"slug"},"status":{"type":"string","description":"A named status for the post","key$":"status"},"type":{"type":"string","description":"Type of post","key$":"type"},"link":{"type":"string","format":"uri","description":"URL to the post","key$":"link"},"title":{"type":"object","properties":{"rendered":{"type":"string","description":"HTML title for the post, transformed for display"}},"key$":"title"},"content":{"type":"object","properties":{"rendered":{"type":"string","description":"HTML content for the post, transformed for display"},"protected":{"type":"boolean","description":"Whether the content is protected with a password"}},"key$":"content"},"excerpt":{"type":"object","properties":{"rendered":{"type":"string","description":"HTML excerpt for the post, transformed for display"},"protected":{"type":"boolean","description":"Whether the excerpt is protected with a password"}},"key$":"excerpt"},"author":{"type":"integer","description":"The ID for the author of the post","key$":"author"},"featured_media":{"type":"integer","description":"The ID of the featured media for the post","key$":"featured_media"},"comment_status":{"type":"string","description":"Whether or not comments are open on the post","key$":"comment_status"},"ping_status":{"type":"string","description":"Whether or not the post can be pinged","key$":"ping_status"},"sticky":{"type":"boolean","description":"Whether or not the post should be treated as sticky","key$":"sticky"},"template":{"type":"string","description":"The theme file to use to display the post","key$":"template"},"format":{"type":"string","description":"The format for the post","key$":"format"},"meta":{"type":"object","description":"Meta fields","key$":"meta"},"categories":{"type":"array","items":{"type":"integer"},"description":"The terms assigned to the post in the category taxonomy","key$":"categories"},"tags":{"type":"array","items":{"type":"integer"},"description":"The terms assigned to the post in the post_tag taxonomy","key$":"tags"}},"x-ref":"#/components/schemas/Post","index$":0},"example":{"id":1234,"date":"2023-01-15T10:30:00","date_gmt":"2023-01-15T10:30:00","modified":"2023-01-15T10:30:00","modified_gmt":"2023-01-15T10:30:00","slug":"sample-design-quote","status":"publish","type":"post","link":"https://quotesondesign.com/sample-design-quote/","title":{"rendered":"Author Name"},"content":{"rendered":"<p>Design is not just what it looks like and feels like. Design is how it works.</p>","protected":false},"excerpt":{"rendered":"<p>Design is not just what it looks like and feels like.</p>","protected":false}}}}},"404":{"description":"Post not found","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Error message"},"data":{"type":"object","properties":{"status":{"type":"integer","description":"HTTP status code"}}}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Error message"},"data":{"type":"object","properties":{"status":{"type":"integer","description":"HTTP status code"}}}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"id","in":"path","description":"Unique identifier of the post","required":true,"schema":{"type":"integer"},"index$":0},{"name":"_embed","in":"query","description":"Include embedded resources in the response","required":false,"schema":{"type":"boolean","default":false},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let post_ref01_data = Object.values(setup.data.existing.post)[0] as any

    // LIST
    const post_ref01_ent = client.Post()
    const post_ref01_match: any = {}

    const post_ref01_list = (await post_ref01_ent.list(post_ref01_match)).map((e: any) => e.data())


    // LOAD
    const post_ref01_match_dt0: any = {}
    post_ref01_match_dt0.id = post_ref01_data.id
    const post_ref01_data_dt0 = (await post_ref01_ent.load(post_ref01_match_dt0)).data()
    assert(post_ref01_data_dt0.id === post_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/post/PostTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = QuotesOnDesignSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['post01','post02','post03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'QUOTES_ON_DESIGN_TEST_POST_ENTID': idmap,
    'QUOTES_ON_DESIGN_TEST_LIVE': 'FALSE',
    'QUOTES_ON_DESIGN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['QUOTES_ON_DESIGN_TEST_POST_ENTID']

  const live = 'TRUE' === env.QUOTES_ON_DESIGN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['QUOTES_ON_DESIGN_TEST_POST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new QuotesOnDesignSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.QUOTES_ON_DESIGN_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
