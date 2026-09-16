

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"author","req":false,"short":"The ID for the author of the post","type":"`$INTEGER`","index$":0},{"active":true,"name":"categories","req":false,"short":"The terms assigned to the post in the category taxonomy","type":"`$ARRAY`","index$":1},{"active":true,"name":"comment_status","req":false,"short":"Whether or not comments are open on the post","type":"`$STRING`","index$":2},{"active":true,"name":"content","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"format":"date-time","name":"date","req":false,"short":"The date the post was published, in the site's timezone","type":"`$STRING`","index$":4},{"active":true,"format":"date-time","name":"date_gmt","req":false,"short":"The date the post was published, as GMT","type":"`$STRING`","index$":5},{"active":true,"name":"excerpt","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"featured_media","req":false,"short":"The ID of the featured media for the post","type":"`$INTEGER`","index$":7},{"active":true,"name":"format","req":false,"short":"The format for the post","type":"`$STRING`","index$":8},{"active":true,"name":"guid","req":false,"type":"`$OBJECT`","index$":9},{"active":true,"name":"id","req":false,"short":"Unique identifier for the post","type":"`$INTEGER`","index$":10},{"active":true,"format":"uri","name":"link","req":false,"short":"URL to the post","type":"`$STRING`","index$":11},{"active":true,"name":"meta","req":false,"short":"Meta fields","type":"`$OBJECT`","index$":12},{"active":true,"format":"date-time","name":"modified","req":false,"short":"The date the post was last modified, in the site's timezone","type":"`$STRING`","index$":13},{"active":true,"format":"date-time","name":"modified_gmt","req":false,"short":"The date the post was last modified, as GMT","type":"`$STRING`","index$":14},{"active":true,"name":"ping_status","req":false,"short":"Whether or not the post can be pinged","type":"`$STRING`","index$":15},{"active":true,"name":"slug","req":false,"short":"An alphanumeric identifier for the post unique to its type","type":"`$STRING`","index$":16},{"active":true,"name":"status","req":false,"short":"A named status for the post","type":"`$STRING`","index$":17},{"active":true,"name":"sticky","req":false,"short":"Whether or not the post should be treated as sticky","type":"`$BOOLEAN`","index$":18},{"active":true,"name":"tags","req":false,"short":"The terms assigned to the post in the post_tag taxonomy","type":"`$ARRAY`","index$":19},{"active":true,"name":"template","req":false,"short":"The theme file to use to display the post","type":"`$STRING`","index$":20},{"active":true,"name":"title","req":false,"type":"`$OBJECT`","index$":21},{"active":true,"name":"type","req":false,"short":"Type of post","type":"`$STRING`","index$":22}],"id":{"field":"id","name":"id"},"name":"post","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":false,"kind":"query","name":"embed","orig":"embed","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":"date","kind":"query","name":"orderby","orig":"orderby","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":10,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":3}]},"contract":{"id":"GET /posts/","json":"{\"operationId\":\"getPosts\",\"parameters\":[{\"description\":\"Order posts by a specific field. Use 'rand' for randomized results.\",\"in\":\"query\",\"name\":\"orderby\",\"required\":false,\"schema\":{\"default\":\"date\",\"enum\":[\"date\",\"id\",\"title\",\"rand\"],\"type\":\"string\"}},{\"description\":\"Number of posts to retrieve per page\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Page number of results to retrieve\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Include embedded resources in the response\",\"in\":\"query\",\"name\":\"_embed\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"content\":{\"protected\":false,\"rendered\":\"<p>Design is not just what it looks like and feels like. Design is how it works.</p>\"},\"date\":\"2023-01-15T10:30:00\",\"date_gmt\":\"2023-01-15T10:30:00\",\"excerpt\":{\"protected\":false,\"rendered\":\"<p>Design is not just what it looks like and feels like.</p>\"},\"id\":1234,\"link\":\"https://quotesondesign.com/sample-design-quote/\",\"modified\":\"2023-01-15T10:30:00\",\"modified_gmt\":\"2023-01-15T10:30:00\",\"slug\":\"sample-design-quote\",\"status\":\"publish\",\"title\":{\"rendered\":\"Author Name\"},\"type\":\"post\"}],\"schema\":{\"items\":{\"properties\":{\"author\":{\"description\":\"The ID for the author of the post\",\"type\":\"integer\"},\"categories\":{\"description\":\"The terms assigned to the post in the category taxonomy\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"comment_status\":{\"description\":\"Whether or not comments are open on the post\",\"type\":\"string\"},\"content\":{\"properties\":{\"protected\":{\"description\":\"Whether the content is protected with a password\",\"type\":\"boolean\"},\"rendered\":{\"description\":\"HTML content for the post, transformed for display\",\"type\":\"string\"}},\"type\":\"object\"},\"date\":{\"description\":\"The date the post was published, in the site's timezone\",\"format\":\"date-time\",\"type\":\"string\"},\"date_gmt\":{\"description\":\"The date the post was published, as GMT\",\"format\":\"date-time\",\"type\":\"string\"},\"excerpt\":{\"properties\":{\"protected\":{\"description\":\"Whether the excerpt is protected with a password\",\"type\":\"boolean\"},\"rendered\":{\"description\":\"HTML excerpt for the post, transformed for display\",\"type\":\"string\"}},\"type\":\"object\"},\"featured_media\":{\"description\":\"The ID of the featured media for the post\",\"type\":\"integer\"},\"format\":{\"description\":\"The format for the post\",\"type\":\"string\"},\"guid\":{\"properties\":{\"rendered\":{\"description\":\"GUID for the post, as it exists in the database\",\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"description\":\"Unique identifier for the post\",\"type\":\"integer\"},\"link\":{\"description\":\"URL to the post\",\"format\":\"uri\",\"type\":\"string\"},\"meta\":{\"description\":\"Meta fields\",\"type\":\"object\"},\"modified\":{\"description\":\"The date the post was last modified, in the site's timezone\",\"format\":\"date-time\",\"type\":\"string\"},\"modified_gmt\":{\"description\":\"The date the post was last modified, as GMT\",\"format\":\"date-time\",\"type\":\"string\"},\"ping_status\":{\"description\":\"Whether or not the post can be pinged\",\"type\":\"string\"},\"slug\":{\"description\":\"An alphanumeric identifier for the post unique to its type\",\"type\":\"string\"},\"status\":{\"description\":\"A named status for the post\",\"type\":\"string\"},\"sticky\":{\"description\":\"Whether or not the post should be treated as sticky\",\"type\":\"boolean\"},\"tags\":{\"description\":\"The terms assigned to the post in the post_tag taxonomy\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"template\":{\"description\":\"The theme file to use to display the post\",\"type\":\"string\"},\"title\":{\"properties\":{\"rendered\":{\"description\":\"HTML title for the post, transformed for display\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Type of post\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with an array of quote posts\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"data\":{\"properties\":{\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"data\":{\"properties\":{\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/posts/","segments":[{"lit":"posts"}],"select":{"exist":["embed","orderby","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"example":false,"kind":"query","name":"embed","orig":"embed","reqd":false,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"GET /posts/{id}","json":"{\"operationId\":\"getPostById\",\"parameters\":[{\"description\":\"Unique identifier of the post\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Include embedded resources in the response\",\"in\":\"query\",\"name\":\"_embed\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"content\":{\"protected\":false,\"rendered\":\"<p>Design is not just what it looks like and feels like. Design is how it works.</p>\"},\"date\":\"2023-01-15T10:30:00\",\"date_gmt\":\"2023-01-15T10:30:00\",\"excerpt\":{\"protected\":false,\"rendered\":\"<p>Design is not just what it looks like and feels like.</p>\"},\"id\":1234,\"link\":\"https://quotesondesign.com/sample-design-quote/\",\"modified\":\"2023-01-15T10:30:00\",\"modified_gmt\":\"2023-01-15T10:30:00\",\"slug\":\"sample-design-quote\",\"status\":\"publish\",\"title\":{\"rendered\":\"Author Name\"},\"type\":\"post\"},\"schema\":{\"properties\":{\"author\":{\"description\":\"The ID for the author of the post\",\"type\":\"integer\"},\"categories\":{\"description\":\"The terms assigned to the post in the category taxonomy\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"comment_status\":{\"description\":\"Whether or not comments are open on the post\",\"type\":\"string\"},\"content\":{\"properties\":{\"protected\":{\"description\":\"Whether the content is protected with a password\",\"type\":\"boolean\"},\"rendered\":{\"description\":\"HTML content for the post, transformed for display\",\"type\":\"string\"}},\"type\":\"object\"},\"date\":{\"description\":\"The date the post was published, in the site's timezone\",\"format\":\"date-time\",\"type\":\"string\"},\"date_gmt\":{\"description\":\"The date the post was published, as GMT\",\"format\":\"date-time\",\"type\":\"string\"},\"excerpt\":{\"properties\":{\"protected\":{\"description\":\"Whether the excerpt is protected with a password\",\"type\":\"boolean\"},\"rendered\":{\"description\":\"HTML excerpt for the post, transformed for display\",\"type\":\"string\"}},\"type\":\"object\"},\"featured_media\":{\"description\":\"The ID of the featured media for the post\",\"type\":\"integer\"},\"format\":{\"description\":\"The format for the post\",\"type\":\"string\"},\"guid\":{\"properties\":{\"rendered\":{\"description\":\"GUID for the post, as it exists in the database\",\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"description\":\"Unique identifier for the post\",\"type\":\"integer\"},\"link\":{\"description\":\"URL to the post\",\"format\":\"uri\",\"type\":\"string\"},\"meta\":{\"description\":\"Meta fields\",\"type\":\"object\"},\"modified\":{\"description\":\"The date the post was last modified, in the site's timezone\",\"format\":\"date-time\",\"type\":\"string\"},\"modified_gmt\":{\"description\":\"The date the post was last modified, as GMT\",\"format\":\"date-time\",\"type\":\"string\"},\"ping_status\":{\"description\":\"Whether or not the post can be pinged\",\"type\":\"string\"},\"slug\":{\"description\":\"An alphanumeric identifier for the post unique to its type\",\"type\":\"string\"},\"status\":{\"description\":\"A named status for the post\",\"type\":\"string\"},\"sticky\":{\"description\":\"Whether or not the post should be treated as sticky\",\"type\":\"boolean\"},\"tags\":{\"description\":\"The terms assigned to the post in the post_tag taxonomy\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"template\":{\"description\":\"The theme file to use to display the post\",\"type\":\"string\"},\"title\":{\"properties\":{\"rendered\":{\"description\":\"HTML title for the post, transformed for display\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Type of post\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with a single quote post\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"data\":{\"properties\":{\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Post not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"data\":{\"properties\":{\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/posts/{id}","segments":[{"lit":"posts"},{"var":"id"}],"select":{"exist":["embed","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"post","name__orig":"post","Name":"Post","name_":"post","name-":"post","NAME":"POST","index$":0}, {"active":true,"entity":"post","key$":"BasicPostFlow","kind":"basic","name":"BasicPostFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"post_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"post_ref01","srcdatavar":"post_ref01_data","suffix":"_dt0"},"match":{"id":"post01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-post_ref01"}}],"index$":1}]}, 'Post')
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
  
