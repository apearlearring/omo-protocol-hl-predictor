# Changelog

## [v0.1.5-alpha.4](https://github.com/ai16z/eliza/tree/v0.1.5-alpha.4) (2024-12-06)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.5-alpha.3...v0.1.5-alpha.4)

**Fixed bugs:**

- `pnpm  start` crashes if there is too much data in knowledge [\#866](https://github.com/ai16z/eliza/issues/866)
- Twitter login some function not work.  [\#857](https://github.com/ai16z/eliza/issues/857)

**Merged pull requests:**

- docs: Add AI Agent Dev School Parts 2 and 3 summaries and timestamps [\#877](https://github.com/ai16z/eliza/pull/877) ([YoungPhlo](https://github.com/YoungPhlo))
- Add google model env vars [\#875](https://github.com/ai16z/eliza/pull/875) ([peersky](https://github.com/peersky))
- Update quickstart.md [\#872](https://github.com/ai16z/eliza/pull/872) ([oxSaturn](https://github.com/oxSaturn))
- Remove duplicated coinbase CDP options in .env.example [\#863](https://github.com/ai16z/eliza/pull/863) ([juntao](https://github.com/juntao))
- test: adding environment and knowledge tests [\#862](https://github.com/ai16z/eliza/pull/862) ([ai16z-demirix](https://github.com/ai16z-demirix))
- Updated quickstart.md to contemplate common issue [\#861](https://github.com/ai16z/eliza/pull/861) ([fede2442](https://github.com/fede2442))
- fix: Use LARGE models for responses [\#853](https://github.com/ai16z/eliza/pull/853) ([lalalune](https://github.com/lalalune))
- Update Node version in local-development.md [\#850](https://github.com/ai16z/eliza/pull/850) ([oxSaturn](https://github.com/oxSaturn))
- fix: plugins docs [\#848](https://github.com/ai16z/eliza/pull/848) ([cygaar](https://github.com/cygaar))
- fix: run release workflow after a github release is created [\#846](https://github.com/ai16z/eliza/pull/846) ([cygaar](https://github.com/cygaar))
- fix: Include scripts/postinstall.js in the final NPM package [\#843](https://github.com/ai16z/eliza/pull/843) ([martincik](https://github.com/martincik))
- feat: add Aptos plugin [\#818](https://github.com/ai16z/eliza/pull/818) ([0xaptosj](https://github.com/0xaptosj))
- feat: add coinbase  ERC20, ERC721, and ERC1155 tokenContract deployment / invokement plugin [\#803](https://github.com/ai16z/eliza/pull/803) ([monilpat](https://github.com/monilpat))
- feat: coinbase webhook + add more examples + testing [\#801](https://github.com/ai16z/eliza/pull/801) ([monilpat](https://github.com/monilpat))

## [v0.1.5-alpha.3](https://github.com/ai16z/eliza/tree/v0.1.5-alpha.3) (2024-12-04)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.5-alpha.2...v0.1.5-alpha.3)

**Merged pull requests:**

- chore: bump version to 0.1.5-alpha.3 [\#838](https://github.com/ai16z/eliza/pull/838) ([cygaar](https://github.com/cygaar))
- chore: Revert/viem version and bump @goat-sdk/plugin-erc20 [\#836](https://github.com/ai16z/eliza/pull/836) ([shakkernerd](https://github.com/shakkernerd))
- chore: revert viem package version [\#834](https://github.com/ai16z/eliza/pull/834) ([shakkernerd](https://github.com/shakkernerd))

## [v0.1.5-alpha.2](https://github.com/ai16z/eliza/tree/v0.1.5-alpha.2) (2024-12-04)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.5-alpha.0...v0.1.5-alpha.2)

**Implemented enhancements:**

- feat: Add circuit breaker pattern for database operations [\#712](https://github.com/ai16z/eliza/issues/712)

**Fixed bugs:**

- 404 Localhost port 3000 [\#804](https://github.com/ai16z/eliza/issues/804)
- actions examples selection does not select things properly [\#798](https://github.com/ai16z/eliza/issues/798)
- recentPosts always empty [\#679](https://github.com/ai16z/eliza/issues/679)

**Merged pull requests:**

- chore: bump version to 0.1.5-alpha.1 [\#833](https://github.com/ai16z/eliza/pull/833) ([cygaar](https://github.com/cygaar))
- fix: pin all node dependencies + update @solana/web3.js to safe version [\#832](https://github.com/ai16z/eliza/pull/832) ([cygaar](https://github.com/cygaar))
- fix: docker-setup.md [\#826](https://github.com/ai16z/eliza/pull/826) ([Freytes](https://github.com/Freytes))
- fix: twitter cache expires [\#824](https://github.com/ai16z/eliza/pull/824) ([palsp](https://github.com/palsp))
- feat: \(core\) Add circuit breaker pattern for database operations -… [\#812](https://github.com/ai16z/eliza/pull/812) ([augchan42](https://github.com/augchan42))
- fix: lerna publish command [\#811](https://github.com/ai16z/eliza/pull/811) ([cygaar](https://github.com/cygaar))

## [v0.1.5-alpha.0](https://github.com/ai16z/eliza/tree/v0.1.5-alpha.0) (2024-12-03)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.5...v0.1.5-alpha.0)

**Fixed bugs:**

- Plugin system in character.plugins is not working [\#795](https://github.com/ai16z/eliza/issues/795)

**Closed issues:**

- State should use a cosine similarity of messages in the DB  [\#471](https://github.com/ai16z/eliza/issues/471)

**Merged pull requests:**

- fix: update package version to v0.1.5-alpha.0 [\#808](https://github.com/ai16z/eliza/pull/808) ([cygaar](https://github.com/cygaar))
- fix: release workflow part 3 [\#807](https://github.com/ai16z/eliza/pull/807) ([cygaar](https://github.com/cygaar))
- fix: part 2 of updating the npm publish workflow [\#806](https://github.com/ai16z/eliza/pull/806) ([cygaar](https://github.com/cygaar))
- fix: update npm publication workflow [\#805](https://github.com/ai16z/eliza/pull/805) ([cygaar](https://github.com/cygaar))
- fix: swap type error, create user trust on first message in telegram [\#800](https://github.com/ai16z/eliza/pull/800) ([MarcoMandar](https://github.com/MarcoMandar))
- refactor: Improve actions samples random selection [\#799](https://github.com/ai16z/eliza/pull/799) ([dievardump](https://github.com/dievardump))
- fix: Docker default non-interactive mode for Cloud instances [\#796](https://github.com/ai16z/eliza/pull/796) ([rarepepi](https://github.com/rarepepi))
- fix: dev command [\#793](https://github.com/ai16z/eliza/pull/793) ([shakkernerd](https://github.com/shakkernerd))
- chore: update README\_KOR.md to match latest README.md [\#789](https://github.com/ai16z/eliza/pull/789) ([mike0295](https://github.com/mike0295))
- fix: enviroment -\> environment [\#787](https://github.com/ai16z/eliza/pull/787) ([tomguluson92](https://github.com/tomguluson92))
- Update generation.ts to fix TOGETHER/LLAMACLOUD image generation [\#786](https://github.com/ai16z/eliza/pull/786) ([ProphetX10](https://github.com/ProphetX10))
- fixs: uuid compatible for number [\#785](https://github.com/ai16z/eliza/pull/785) ([tomguluson92](https://github.com/tomguluson92))
- fix: When the plugins field in the .character.json file is configured with plugin name. [\#784](https://github.com/ai16z/eliza/pull/784) ([xwxtwd](https://github.com/xwxtwd))

## [v0.1.5](https://github.com/ai16z/eliza/tree/v0.1.5) (2024-12-02)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.4-alpha.3...v0.1.5)

**Implemented enhancements:**

- feat-Enhanced Voice Configuration Support in Character Cards [\#694](https://github.com/ai16z/eliza/issues/694)
- Optional image model provider to character and runtime [\#647](https://github.com/ai16z/eliza/issues/647)
- I have GROQ\_API\_KEY and telgram's robot token, How should I configure it so that I can interact with Telegram only by using the API without starting a model locally? [\#623](https://github.com/ai16z/eliza/issues/623)
- Add support for local embeddings BGE/384 [\#604](https://github.com/ai16z/eliza/issues/604)
- Need Discord or Telegram Group to Quickly Get Help For Developer [\#563](https://github.com/ai16z/eliza/issues/563)
- feat : whatsapp [\#626](https://github.com/ai16z/eliza/pull/626) ([awidearray](https://github.com/awidearray))

**Fixed bugs:**

- pnpm install error - ELIFECYCLE Exit code 1 [\#720](https://github.com/ai16z/eliza/issues/720)
- Debug/Verbose eliza logging is always shown [\#687](https://github.com/ai16z/eliza/issues/687)
- Failed codecov run [\#663](https://github.com/ai16z/eliza/issues/663)
- Discord Client - gives 0 permissions for invite link on logger [\#661](https://github.com/ai16z/eliza/issues/661)
- TypeError while generating a message response [\#657](https://github.com/ai16z/eliza/issues/657)
- Smol one; Matched fragment log not showing similarity score [\#615](https://github.com/ai16z/eliza/issues/615)
- New knowledge not being ingested into agent memory after first run [\#614](https://github.com/ai16z/eliza/issues/614)
- Tests failing - token.test.ts failing because it is commented out. Cache and goals tests are failing because jest is now switched with vitest [\#519](https://github.com/ai16z/eliza/issues/519)
- Non node.js environments have issues building \(workers for instance\) [\#506](https://github.com/ai16z/eliza/issues/506)
- Error when call `generateObjectV2` [\#469](https://github.com/ai16z/eliza/issues/469)
- Current token.test.ts and videoGeneration.test.ts are throwing errors [\#464](https://github.com/ai16z/eliza/issues/464)
- unable to run defaultcharacter with ModelProviderName.LLAMACLOUD local [\#271](https://github.com/ai16z/eliza/issues/271)
- Incorrect steps in readme for starting eliza [\#270](https://github.com/ai16z/eliza/issues/270)

**Merged pull requests:**

- refactor: refactor dockerfile to reduce image and build time [\#782](https://github.com/ai16z/eliza/pull/782) ([HashWarlock](https://github.com/HashWarlock))
- feat: Update default character [\#781](https://github.com/ai16z/eliza/pull/781) ([lalalune](https://github.com/lalalune))
- fix: Refactor image interface and update to move llama cloud -\> together provider [\#777](https://github.com/ai16z/eliza/pull/777) ([lalalune](https://github.com/lalalune))
- Create docker-setup.md [\#776](https://github.com/ai16z/eliza/pull/776) ([Freytes](https://github.com/Freytes))
- Merge more model providers and fix issues [\#775](https://github.com/ai16z/eliza/pull/775) ([lalalune](https://github.com/lalalune))
- Integrate more LLMs, fix case issue in switch [\#774](https://github.com/ai16z/eliza/pull/774) ([lalalune](https://github.com/lalalune))
- Integrate goat plugin [\#773](https://github.com/ai16z/eliza/pull/773) ([lalalune](https://github.com/lalalune))
- fix: Integrate jin's docs changes and rebuild docs with a16z [\#772](https://github.com/ai16z/eliza/pull/772) ([lalalune](https://github.com/lalalune))
- feat: more dependency updates [\#771](https://github.com/ai16z/eliza/pull/771) ([lalalune](https://github.com/lalalune))
- chore\(deps\): update dependency @vitest/eslint-plugin to v1.1.13 [\#770](https://github.com/ai16z/eliza/pull/770) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency @eslint/js to v9.16.0 [\#769](https://github.com/ai16z/eliza/pull/769) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update sqlite related [\#768](https://github.com/ai16z/eliza/pull/768) ([renovate[bot]](https://github.com/apps/renovate))
- feat: Pin dependencies and unify tsconfig [\#767](https://github.com/ai16z/eliza/pull/767) ([lalalune](https://github.com/lalalune))
- Update dependency uuid to v11.0.3 [\#766](https://github.com/ai16z/eliza/pull/766) ([renovate[bot]](https://github.com/apps/renovate))
- Update environment, add twitter quality of life updates [\#765](https://github.com/ai16z/eliza/pull/765) ([lalalune](https://github.com/lalalune))
- fix: improve twitter post content quality [\#763](https://github.com/ai16z/eliza/pull/763) ([cygaar](https://github.com/cygaar))
- Add decentralized GenAI backend  [\#762](https://github.com/ai16z/eliza/pull/762) ([L-jasmine](https://github.com/L-jasmine))
- fix\(deps\): update dependency tailwind-merge to v2.5.5 [\#761](https://github.com/ai16z/eliza/pull/761) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency clsx to v2.1.1 [\#760](https://github.com/ai16z/eliza/pull/760) ([renovate[bot]](https://github.com/apps/renovate))
- feat: donate 1% of coinbase transactions by default [\#759](https://github.com/ai16z/eliza/pull/759) ([monilpat](https://github.com/monilpat))
- Add running with Gitpod [\#758](https://github.com/ai16z/eliza/pull/758) ([v1xingyue](https://github.com/v1xingyue))
- fix: follow-up improvements for ICP token creation \(PR \#357\) [\#757](https://github.com/ai16z/eliza/pull/757) ([asDNSk](https://github.com/asDNSk))
- fix: recentPosts always empty [\#756](https://github.com/ai16z/eliza/pull/756) ([tcm390](https://github.com/tcm390))
- Update dependency @supabase/supabase-js to v2.46.2 [\#754](https://github.com/ai16z/eliza/pull/754) ([renovate[bot]](https://github.com/apps/renovate))
- fix: packagejson updated to latest agent-client 0.0.16 [\#753](https://github.com/ai16z/eliza/pull/753) ([denizekiz](https://github.com/denizekiz))
- fix: Text2Image interface refactored [\#752](https://github.com/ai16z/eliza/pull/752) ([tomguluson92](https://github.com/tomguluson92))
- fix\(deps\): update dependency @ai-sdk/openai to v1.0.5 [\#751](https://github.com/ai16z/eliza/pull/751) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): replace dependency eslint-plugin-vitest with @vitest/eslint-plugin 1.0.1 [\#749](https://github.com/ai16z/eliza/pull/749) ([renovate[bot]](https://github.com/apps/renovate))
- feat: Add two more providers: Ali Bailian\(Qwen\) and Volengine\(Doubao, Bytedance\) [\#747](https://github.com/ai16z/eliza/pull/747) ([btspoony](https://github.com/btspoony))
- add simulator tutor for plugin-tee docs [\#746](https://github.com/ai16z/eliza/pull/746) ([shelvenzhou](https://github.com/shelvenzhou))
- feat: Create community section [\#745](https://github.com/ai16z/eliza/pull/745) ([madjin](https://github.com/madjin))
- fix\(deps\): pin dependencies [\#744](https://github.com/ai16z/eliza/pull/744) ([renovate[bot]](https://github.com/apps/renovate))
- fix \(core\): message completion footer format [\#742](https://github.com/ai16z/eliza/pull/742) ([CodingTux](https://github.com/CodingTux))
- chore: remove unused env var [\#737](https://github.com/ai16z/eliza/pull/737) ([2pmflow](https://github.com/2pmflow))
- feat: add goat plugin [\#736](https://github.com/ai16z/eliza/pull/736) ([0xaguspunk](https://github.com/0xaguspunk))
- feat: increase knowledge context [\#730](https://github.com/ai16z/eliza/pull/730) ([cygaar](https://github.com/cygaar))
- fix: twitter recent interactions [\#729](https://github.com/ai16z/eliza/pull/729) ([cygaar](https://github.com/cygaar))
- feat: add new pages, update sidebar [\#728](https://github.com/ai16z/eliza/pull/728) ([madjin](https://github.com/madjin))
- refactor: ClientBase to use a map for managing multiple Twitter clients by account identifier [\#722](https://github.com/ai16z/eliza/pull/722) ([tcm390](https://github.com/tcm390))
- fix: simplify linting dependencies [\#721](https://github.com/ai16z/eliza/pull/721) ([cygaar](https://github.com/cygaar))
- fix: move `fastembed` import to the isnode condition check [\#709](https://github.com/ai16z/eliza/pull/709) ([antpb](https://github.com/antpb))
- fix: Switch from tiktoken to js-tiktoken for worker compatibility [\#703](https://github.com/ai16z/eliza/pull/703) ([antpb](https://github.com/antpb))
- fix: update docker image to support turbo and reduce build time [\#702](https://github.com/ai16z/eliza/pull/702) ([HashWarlock](https://github.com/HashWarlock))
- chore: Remove web-agent folder - duplicate of client folder [\#699](https://github.com/ai16z/eliza/pull/699) ([shakkernerd](https://github.com/shakkernerd))
- feat: \(voice\) enhance character card voice configuration support [\#698](https://github.com/ai16z/eliza/pull/698) ([augchan42](https://github.com/augchan42))
- chore: remove unused packages introduced in \#677 [\#693](https://github.com/ai16z/eliza/pull/693) ([shakkernerd](https://github.com/shakkernerd))
- Fix/logging issues [\#688](https://github.com/ai16z/eliza/pull/688) ([augchan42](https://github.com/augchan42))
- feat: make twitter client polling configurable [\#683](https://github.com/ai16z/eliza/pull/683) ([cygaar](https://github.com/cygaar))
- fix: getEmbeddingZeroVector calls [\#682](https://github.com/ai16z/eliza/pull/682) ([cygaar](https://github.com/cygaar))
- fix: Make TEE Plugin available to launch agent & fix previous launch error [\#678](https://github.com/ai16z/eliza/pull/678) ([HashWarlock](https://github.com/HashWarlock))
- feat: improve embeddings, models and connectivity [\#677](https://github.com/ai16z/eliza/pull/677) ([augchan42](https://github.com/augchan42))
- Fix: run tests with coverage [\#676](https://github.com/ai16z/eliza/pull/676) ([pgoos](https://github.com/pgoos))
- fix: add missing viem dependency [\#674](https://github.com/ai16z/eliza/pull/674) ([HashWarlock](https://github.com/HashWarlock))
- fix: eslint not working [\#672](https://github.com/ai16z/eliza/pull/672) ([cygaar](https://github.com/cygaar))
- fix: embeddings for messages with urls [\#671](https://github.com/ai16z/eliza/pull/671) ([cygaar](https://github.com/cygaar))
- feat: add Turborepo [\#670](https://github.com/ai16z/eliza/pull/670) ([lalalune](https://github.com/lalalune))
- incorrect package install location Update plugins.md [\#669](https://github.com/ai16z/eliza/pull/669) ([cryptoradagast](https://github.com/cryptoradagast))
- redpill custom models [\#668](https://github.com/ai16z/eliza/pull/668) ([v1xingyue](https://github.com/v1xingyue))
- feat: evm pubkey derivation [\#667](https://github.com/ai16z/eliza/pull/667) ([St4rgarden](https://github.com/St4rgarden))
- fix: add missing commands to quickstart [\#665](https://github.com/ai16z/eliza/pull/665) ([0xaguspunk](https://github.com/0xaguspunk))
- fix: pnpm-lock.yaml [\#664](https://github.com/ai16z/eliza/pull/664) ([monilpat](https://github.com/monilpat))
- fix: discord permissions and duplicate reactions, new /joinchannel command [\#662](https://github.com/ai16z/eliza/pull/662) ([augchan42](https://github.com/augchan42))
- fix: embedding search for non-openai models [\#660](https://github.com/ai16z/eliza/pull/660) ([cygaar](https://github.com/cygaar))
- feat: add minimal config file for code cov [\#659](https://github.com/ai16z/eliza/pull/659) ([pgoos](https://github.com/pgoos))
- feat: Add wallet history \(transactions, balances\) to coinbase providers [\#658](https://github.com/ai16z/eliza/pull/658) ([monilpat](https://github.com/monilpat))
- CS - adding better errors and readme. [\#654](https://github.com/ai16z/eliza/pull/654) ([justabot](https://github.com/justabot))
- feat: improve browser service [\#653](https://github.com/ai16z/eliza/pull/653) ([cygaar](https://github.com/cygaar))
- Update ci.yaml [\#652](https://github.com/ai16z/eliza/pull/652) ([snobbee](https://github.com/snobbee))
- Add Galadriel LLM Inference Provider [\#651](https://github.com/ai16z/eliza/pull/651) ([dontAskVI](https://github.com/dontAskVI))
- feat: add image text model provider separation and fal.ai integration [\#650](https://github.com/ai16z/eliza/pull/650) ([yoniebans](https://github.com/yoniebans))
- added support for LlamaLocal's path outside plugin-node/dist [\#649](https://github.com/ai16z/eliza/pull/649) ([dr-fusion](https://github.com/dr-fusion))
- updates postgres setup instructions in docs [\#645](https://github.com/ai16z/eliza/pull/645) ([DataRelic](https://github.com/DataRelic))
- feat: Merge EVM and add character override [\#643](https://github.com/ai16z/eliza/pull/643) ([lalalune](https://github.com/lalalune))
- Feat/simulation sell types [\#642](https://github.com/ai16z/eliza/pull/642) ([MarcoMandar](https://github.com/MarcoMandar))
- add connection instruction for connecting with X [\#641](https://github.com/ai16z/eliza/pull/641) ([zjasper666](https://github.com/zjasper666))
- fix: Add docs, update providers for TEE Plugin [\#640](https://github.com/ai16z/eliza/pull/640) ([HashWarlock](https://github.com/HashWarlock))
- Notes for AI Agent Dev School \#1 [\#638](https://github.com/ai16z/eliza/pull/638) ([YoungPhlo](https://github.com/YoungPhlo))
- fix: node package builds [\#636](https://github.com/ai16z/eliza/pull/636) ([cygaar](https://github.com/cygaar))
- refactor: better db connection handling [\#635](https://github.com/ai16z/eliza/pull/635) ([cygaar](https://github.com/cygaar))
- dicord bot voice [\#633](https://github.com/ai16z/eliza/pull/633) ([tcm390](https://github.com/tcm390))
- feat: Initial TEE Plugin [\#632](https://github.com/ai16z/eliza/pull/632) ([HashWarlock](https://github.com/HashWarlock))
- feat: support starkname [\#628](https://github.com/ai16z/eliza/pull/628) ([irisdv](https://github.com/irisdv))
- Feat/sell simulation [\#627](https://github.com/ai16z/eliza/pull/627) ([MarcoMandar](https://github.com/MarcoMandar))
- fix: small improvements to agent process exits [\#625](https://github.com/ai16z/eliza/pull/625) ([cygaar](https://github.com/cygaar))
- fix:  running a character.json fails when running per docs [\#624](https://github.com/ai16z/eliza/pull/624) ([yodamaster726](https://github.com/yodamaster726))
- fix: Add Tweet Response Deduplication Check [\#622](https://github.com/ai16z/eliza/pull/622) ([tsubasakong](https://github.com/tsubasakong))
- fix: handle when tweet\_results is empty better [\#620](https://github.com/ai16z/eliza/pull/620) ([odilitime](https://github.com/odilitime))
- fix: memory similarity log & new knowledge ingestion [\#616](https://github.com/ai16z/eliza/pull/616) ([yoniebans](https://github.com/yoniebans))
- fix: Update and add Conflux [\#613](https://github.com/ai16z/eliza/pull/613) ([lalalune](https://github.com/lalalune))
- fix: Fix buttplug.io integration and merge [\#612](https://github.com/ai16z/eliza/pull/612) ([lalalune](https://github.com/lalalune))
- chore\(nvmrc\): update Node.js version from v23.1.0 to v23.3.0 [\#611](https://github.com/ai16z/eliza/pull/611) ([wolfcito](https://github.com/wolfcito))
- fix: add client farcaster templates to character type [\#610](https://github.com/ai16z/eliza/pull/610) ([bmgalego](https://github.com/bmgalego))
- fix: knowledge module exporting process [\#609](https://github.com/ai16z/eliza/pull/609) ([bmgalego](https://github.com/bmgalego))
- feat: implement coinbase trading [\#608](https://github.com/ai16z/eliza/pull/608) ([monilpat](https://github.com/monilpat))
- fix: use correct getCachedEmbeddings query\_field\_sub\_name [\#607](https://github.com/ai16z/eliza/pull/607) ([bmgalego](https://github.com/bmgalego))
- fix: db queries in sqljs database adapter not using agentId [\#606](https://github.com/ai16z/eliza/pull/606) ([bmgalego](https://github.com/bmgalego))
- fix: agent DirectClient is not a type [\#605](https://github.com/ai16z/eliza/pull/605) ([odilitime](https://github.com/odilitime))
- fix: time prompt to include UTC, convert to verbose english to help prompting [\#603](https://github.com/ai16z/eliza/pull/603) ([odilitime](https://github.com/odilitime))
- fix: add Memory Manager getMemoriesByRoomIds missing tableName param [\#602](https://github.com/ai16z/eliza/pull/602) ([bmgalego](https://github.com/bmgalego))
- feat: add knowledge to state [\#600](https://github.com/ai16z/eliza/pull/600) ([bmgalego](https://github.com/bmgalego))
- feat: make node-plugin lazy-loaded for faster boot times [\#599](https://github.com/ai16z/eliza/pull/599) ([bmgalego](https://github.com/bmgalego))
- fix: discord crash on sending message to null channel [\#598](https://github.com/ai16z/eliza/pull/598) ([odilitime](https://github.com/odilitime))
- feat: sell simulation service [\#597](https://github.com/ai16z/eliza/pull/597) ([MarcoMandar](https://github.com/MarcoMandar))
- Pr 33 [\#596](https://github.com/ai16z/eliza/pull/596) ([MarcoMandar](https://github.com/MarcoMandar))
- feat: starknet portfolio provider [\#595](https://github.com/ai16z/eliza/pull/595) ([milancermak](https://github.com/milancermak))
- Download updates [\#594](https://github.com/ai16z/eliza/pull/594) ([justabot](https://github.com/justabot))
- feat: update sidebars [\#593](https://github.com/ai16z/eliza/pull/593) ([madjin](https://github.com/madjin))
- feat: Adding tests for actions and generation. Skiping test step in defaultCharacters [\#591](https://github.com/ai16z/eliza/pull/591) ([ai16z-demirix](https://github.com/ai16z-demirix))
- fix: enable test run in CI for core package [\#590](https://github.com/ai16z/eliza/pull/590) ([pgoos](https://github.com/pgoos))
- fix: Shaw/fix zerog [\#589](https://github.com/ai16z/eliza/pull/589) ([lalalune](https://github.com/lalalune))
- fix: React Client fixes [\#588](https://github.com/ai16z/eliza/pull/588) ([lalalune](https://github.com/lalalune))
- Shaw/logger fixes [\#587](https://github.com/ai16z/eliza/pull/587) ([lalalune](https://github.com/lalalune))
- feat: Shaw/realityspiral/coinbase fixes [\#586](https://github.com/ai16z/eliza/pull/586) ([lalalune](https://github.com/lalalune))
- feat: More package updates [\#585](https://github.com/ai16z/eliza/pull/585) ([lalalune](https://github.com/lalalune))
- feat: Update packages [\#584](https://github.com/ai16z/eliza/pull/584) ([lalalune](https://github.com/lalalune))
- fix: Devex Fixes [\#583](https://github.com/ai16z/eliza/pull/583) ([lalalune](https://github.com/lalalune))
- feat: update api docs [\#582](https://github.com/ai16z/eliza/pull/582) ([madjin](https://github.com/madjin))
- feat: add new pages [\#581](https://github.com/ai16z/eliza/pull/581) ([madjin](https://github.com/madjin))
- Add community stream notes for WDYGDTW 2 [\#580](https://github.com/ai16z/eliza/pull/580) ([YoungPhlo](https://github.com/YoungPhlo))
- fix: remove postinstall script from plugin-coinbase [\#573](https://github.com/ai16z/eliza/pull/573) ([bmgalego](https://github.com/bmgalego))
- fix: add missing documents and knowledge memory managers to runtime interface [\#572](https://github.com/ai16z/eliza/pull/572) ([bmgalego](https://github.com/bmgalego))
- fix: remove db adapters depencies from core and remove plugin-node from telegram  [\#571](https://github.com/ai16z/eliza/pull/571) ([bmgalego](https://github.com/bmgalego))
- feat: implement coinbase mass payments across base/sol/eth/pol/arb [\#569](https://github.com/ai16z/eliza/pull/569) ([monilpat](https://github.com/monilpat))
- CS - first api hookups. [\#564](https://github.com/ai16z/eliza/pull/564) ([justabot](https://github.com/justabot))
- fix: bump echogarden to fix case sensitive issue [\#561](https://github.com/ai16z/eliza/pull/561) ([0xFlicker](https://github.com/0xFlicker))
- fix: sql command [\#560](https://github.com/ai16z/eliza/pull/560) ([0xFlicker](https://github.com/0xFlicker))
- Improved Twitter Documentation [\#559](https://github.com/ai16z/eliza/pull/559) ([grallc](https://github.com/grallc))
- fix: postgres [\#557](https://github.com/ai16z/eliza/pull/557) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: Use BigInt for tweet IDs in client-twitter [\#552](https://github.com/ai16z/eliza/pull/552) ([wraitii](https://github.com/wraitii))
- fix: generateText format consistency [\#550](https://github.com/ai16z/eliza/pull/550) ([tomguluson92](https://github.com/tomguluson92))
- Update dependency dompurify to v3.2.2 [\#548](https://github.com/ai16z/eliza/pull/548) ([renovate[bot]](https://github.com/apps/renovate))
- fix: Token provider getHighestLiquidityPair [\#547](https://github.com/ai16z/eliza/pull/547) ([bmgalego](https://github.com/bmgalego))
- fix: add try catch to process action [\#546](https://github.com/ai16z/eliza/pull/546) ([bmgalego](https://github.com/bmgalego))
- fix: error in getGoals and remove coinbase package-lock.json  [\#545](https://github.com/ai16z/eliza/pull/545) ([bmgalego](https://github.com/bmgalego))
- Update dependency clsx to v2.1.1 [\#544](https://github.com/ai16z/eliza/pull/544) ([renovate[bot]](https://github.com/apps/renovate))
- Update docusaurus monorepo to v3.6.3 [\#543](https://github.com/ai16z/eliza/pull/543) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency agent-twitter-client to v0.0.14 [\#542](https://github.com/ai16z/eliza/pull/542) ([renovate[bot]](https://github.com/apps/renovate))
- fix: discord voice memory id not unique [\#540](https://github.com/ai16z/eliza/pull/540) ([bmgalego](https://github.com/bmgalego))
- fix: db queries not using agentId in all memory queries [\#539](https://github.com/ai16z/eliza/pull/539) ([bmgalego](https://github.com/bmgalego))
- Update dependency @opendocsg/pdf2md to v0.1.32 [\#538](https://github.com/ai16z/eliza/pull/538) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency @echogarden/espeak-ng-emscripten to v0.3.3 [\#537](https://github.com/ai16z/eliza/pull/537) ([renovate[bot]](https://github.com/apps/renovate))
- feat: add agent selection, router and sidebar layout in React client [\#536](https://github.com/ai16z/eliza/pull/536) ([vivoidos](https://github.com/vivoidos))
- fix: pass runtime to video service [\#535](https://github.com/ai16z/eliza/pull/535) ([0xFlicker](https://github.com/0xFlicker))
- fix\(deps\): update dependency @ai-sdk/openai to v1.0.4 [\#533](https://github.com/ai16z/eliza/pull/533) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency @ai-sdk/google-vertex to ^0.0.43 [\#532](https://github.com/ai16z/eliza/pull/532) ([renovate[bot]](https://github.com/apps/renovate))
- fix: Fix/telegram [\#530](https://github.com/ai16z/eliza/pull/530) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix\(deps\): pin dependencies [\#529](https://github.com/ai16z/eliza/pull/529) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency @ai-sdk/anthropic to ^0.0.56 [\#528](https://github.com/ai16z/eliza/pull/528) ([renovate[bot]](https://github.com/apps/renovate))
- Pin dependency vue to 3.5.13 [\#527](https://github.com/ai16z/eliza/pull/527) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): pin dependencies [\#526](https://github.com/ai16z/eliza/pull/526) ([renovate[bot]](https://github.com/apps/renovate))
- fix: missing updates for logger.ts [\#525](https://github.com/ai16z/eliza/pull/525) ([yodamaster726](https://github.com/yodamaster726))
- fix: Ollama fix [\#524](https://github.com/ai16z/eliza/pull/524) ([yodamaster726](https://github.com/yodamaster726))
- fix: fixing failing goals, cache and token tests [\#522](https://github.com/ai16z/eliza/pull/522) ([ai16z-demirix](https://github.com/ai16z-demirix))
- fix: ollama local and llama local [\#521](https://github.com/ai16z/eliza/pull/521) ([yodamaster726](https://github.com/yodamaster726))
- integrate tavily [\#518](https://github.com/ai16z/eliza/pull/518) ([tcm390](https://github.com/tcm390))
- feat: Add buttplug.io integration [\#517](https://github.com/ai16z/eliza/pull/517) ([8times4](https://github.com/8times4))
- feat: Add decentralized inferencing for Eliza \(LLAMA, Hermes, Flux\) [\#516](https://github.com/ai16z/eliza/pull/516) ([genesis-0000](https://github.com/genesis-0000))
- fix: lint [\#515](https://github.com/ai16z/eliza/pull/515) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: husky and pre-commit [\#514](https://github.com/ai16z/eliza/pull/514) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- feat: add coinbase plugin starting with cb commerce functionality [\#513](https://github.com/ai16z/eliza/pull/513) ([monilpat](https://github.com/monilpat))
- docs: add template and client configuration guide [\#510](https://github.com/ai16z/eliza/pull/510) ([oguzserdar](https://github.com/oguzserdar))
- Wrap `fastembed` in try catch to allow non node environments to build [\#508](https://github.com/ai16z/eliza/pull/508) ([antpb](https://github.com/antpb))
- fix: Gracefully Handle Add Participants Unique Constraint Error in Postgres [\#495](https://github.com/ai16z/eliza/pull/495) ([VarKrishin](https://github.com/VarKrishin))
- test: add linter to all packages and enable vitest [\#490](https://github.com/ai16z/eliza/pull/490) ([snobbee](https://github.com/snobbee))
- feat: add Conflux plugin [\#481](https://github.com/ai16z/eliza/pull/481) ([darwintree](https://github.com/darwintree))
- bugfix: Modify docker run error after agent folder move [\#458](https://github.com/ai16z/eliza/pull/458) ([THtianhao](https://github.com/THtianhao))
- feat: Add 0G plugin for file storage [\#416](https://github.com/ai16z/eliza/pull/416) ([Wilbert957](https://github.com/Wilbert957))
- feat: Farcaster Client [\#386](https://github.com/ai16z/eliza/pull/386) ([bmgalego](https://github.com/bmgalego))
- feat: add ICP token creation support [\#357](https://github.com/ai16z/eliza/pull/357) ([asDNSk](https://github.com/asDNSk))

## [v0.1.4-alpha.3](https://github.com/ai16z/eliza/tree/v0.1.4-alpha.3) (2024-11-22)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.4-alpha.2...v0.1.4-alpha.3)

**Merged pull requests:**

- fix: speech service fix [\#512](https://github.com/ai16z/eliza/pull/512) ([ponderingdemocritus](https://github.com/ponderingdemocritus))

## [v0.1.4-alpha.2](https://github.com/ai16z/eliza/tree/v0.1.4-alpha.2) (2024-11-22)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.4-alpha.1...v0.1.4-alpha.2)

**Merged pull requests:**

- fix: services fix [\#509](https://github.com/ai16z/eliza/pull/509) ([ponderingdemocritus](https://github.com/ponderingdemocritus))

## [v0.1.4-alpha.1](https://github.com/ai16z/eliza/tree/v0.1.4-alpha.1) (2024-11-22)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.4-alpha.0...v0.1.4-alpha.1)

**Merged pull requests:**

- fix: issue with npm [\#505](https://github.com/ai16z/eliza/pull/505) ([ponderingdemocritus](https://github.com/ponderingdemocritus))

## [v0.1.4-alpha.0](https://github.com/ai16z/eliza/tree/v0.1.4-alpha.0) (2024-11-22)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.3...v0.1.4-alpha.0)

**Implemented enhancements:**

- Run using Bun.sh [\#492](https://github.com/ai16z/eliza/issues/492)
- Move Trust DB into package [\#342](https://github.com/ai16z/eliza/issues/342)
- Core Unit Tests [\#340](https://github.com/ai16z/eliza/issues/340)

**Fixed bugs:**

- Twitter Dry Run not working [\#451](https://github.com/ai16z/eliza/issues/451)
- getCachedEmbeddings broken for sqlite adapter  [\#251](https://github.com/ai16z/eliza/issues/251)

**Merged pull requests:**

- fix: remove sol dep [\#504](https://github.com/ai16z/eliza/pull/504) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: deps [\#503](https://github.com/ai16z/eliza/pull/503) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- chore: add contributor license [\#502](https://github.com/ai16z/eliza/pull/502) ([awidearray](https://github.com/awidearray))
- node-v [\#501](https://github.com/ai16z/eliza/pull/501) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: improve embeddings [\#496](https://github.com/ai16z/eliza/pull/496) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- feat: improve type saftey [\#494](https://github.com/ai16z/eliza/pull/494) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: added missing packages to tsup configs' externals [\#488](https://github.com/ai16z/eliza/pull/488) ([massivefermion](https://github.com/massivefermion))
- fix: fix character path loading [\#487](https://github.com/ai16z/eliza/pull/487) ([bmgalego](https://github.com/bmgalego))
- fix: agent loadCharacters file resolver [\#486](https://github.com/ai16z/eliza/pull/486) ([bmgalego](https://github.com/bmgalego))
- fix: agent type error and sqlite file env [\#484](https://github.com/ai16z/eliza/pull/484) ([bmgalego](https://github.com/bmgalego))
- feat: Improvements [\#482](https://github.com/ai16z/eliza/pull/482) ([bmgalego](https://github.com/bmgalego))
- refactor: add template types [\#479](https://github.com/ai16z/eliza/pull/479) ([vivoidos](https://github.com/vivoidos))
- feat: Twitter Refactor [\#478](https://github.com/ai16z/eliza/pull/478) ([bmgalego](https://github.com/bmgalego))
- feat: Added TWITTER\_COOKIE example on quickstart.md [\#476](https://github.com/ai16z/eliza/pull/476) ([haeunchin](https://github.com/haeunchin))
- fix: ci [\#475](https://github.com/ai16z/eliza/pull/475) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- ollama generate case was using console.debug.  [\#474](https://github.com/ai16z/eliza/pull/474) ([drew-royster](https://github.com/drew-royster))
- feat: Improve knowledge embeddings [\#472](https://github.com/ai16z/eliza/pull/472) ([tarrencev](https://github.com/tarrencev))
- docs: Update Contributors to bring inline with PR468 [\#470](https://github.com/ai16z/eliza/pull/470) ([odilitime](https://github.com/odilitime))
- docs: Add Discord username question [\#468](https://github.com/ai16z/eliza/pull/468) ([odilitime](https://github.com/odilitime))
- feat: adds check [\#466](https://github.com/ai16z/eliza/pull/466) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: Fixing failling tests token.test.ts and videoGeneration.test.ts [\#465](https://github.com/ai16z/eliza/pull/465) ([ai16z-demirix](https://github.com/ai16z-demirix))
- docs: Create best-practices.md documentation [\#463](https://github.com/ai16z/eliza/pull/463) ([snobbee](https://github.com/snobbee))
- feat: create-eliza-app [\#462](https://github.com/ai16z/eliza/pull/462) ([coffeeorgreentea](https://github.com/coffeeorgreentea))
- fix: Add missing fuzzystrmatch extension for levenshtein\(\) method to postgresql schema.sql definition [\#460](https://github.com/ai16z/eliza/pull/460) ([martincik](https://github.com/martincik))
- Add npm install instructions to homepage header [\#459](https://github.com/ai16z/eliza/pull/459) ([null-hax](https://github.com/null-hax))
- feat: init github client [\#456](https://github.com/ai16z/eliza/pull/456) ([tarrencev](https://github.com/tarrencev))
- fix: X dry run [\#452](https://github.com/ai16z/eliza/pull/452) ([laser-riot](https://github.com/laser-riot))
- feat: readme and linting [\#449](https://github.com/ai16z/eliza/pull/449) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: ignored modelEndpointOverride in generation [\#446](https://github.com/ai16z/eliza/pull/446) ([darwintree](https://github.com/darwintree))
- docs: Fix my name in stream notes [\#442](https://github.com/ai16z/eliza/pull/442) ([odilitime](https://github.com/odilitime))
- fix: postgres embedding issues [\#425](https://github.com/ai16z/eliza/pull/425) ([tarrencev](https://github.com/tarrencev))
- feat: Cache Manager [\#378](https://github.com/ai16z/eliza/pull/378) ([bmgalego](https://github.com/bmgalego))
- feat: adding back the renovate file for automated security scanning [\#358](https://github.com/ai16z/eliza/pull/358) ([sirkitree](https://github.com/sirkitree))

## [v0.1.3](https://github.com/ai16z/eliza/tree/v0.1.3) (2024-11-20)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.3-alpha.2...v0.1.3)

**Implemented enhancements:**

- ⚙️Take Order Action Integration [\#53](https://github.com/ai16z/eliza/issues/53)
- 🔍 Trust Score Calculator [\#52](https://github.com/ai16z/eliza/issues/52)
- 📊 Order Book System [\#49](https://github.com/ai16z/eliza/issues/49)
- daos.fun integration [\#33](https://github.com/ai16z/eliza/issues/33)

**Merged pull requests:**

- fix: voice perms [\#447](https://github.com/ai16z/eliza/pull/447) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: unrug [\#444](https://github.com/ai16z/eliza/pull/444) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- feat:  add all the style guidelines to the context [\#441](https://github.com/ai16z/eliza/pull/441) ([o-on-x](https://github.com/o-on-x))
- fix: fixes some console logs [\#440](https://github.com/ai16z/eliza/pull/440) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: The bot is by default deafened and we don't want that [\#437](https://github.com/ai16z/eliza/pull/437) ([martincik](https://github.com/martincik))
- fix: path [\#436](https://github.com/ai16z/eliza/pull/436) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: since agent is moved out of packages, adjust default path [\#432](https://github.com/ai16z/eliza/pull/432) ([odilitime](https://github.com/odilitime))
- fix: Fix linter issues [\#397](https://github.com/ai16z/eliza/pull/397) ([martincik](https://github.com/martincik))

## [v0.1.3-alpha.2](https://github.com/ai16z/eliza/tree/v0.1.3-alpha.2) (2024-11-20)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.3-alpha.1...v0.1.3-alpha.2)

**Merged pull requests:**

- fix: imports [\#435](https://github.com/ai16z/eliza/pull/435) ([ponderingdemocritus](https://github.com/ponderingdemocritus))

## [v0.1.3-alpha.1](https://github.com/ai16z/eliza/tree/v0.1.3-alpha.1) (2024-11-20)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.3-alpha.0...v0.1.3-alpha.1)

**Merged pull requests:**

- chore: Update pr.yaml to show actual condition so easier to follow [\#429](https://github.com/ai16z/eliza/pull/429) ([monilpat](https://github.com/monilpat))
- feat: don't require .env to exist [\#427](https://github.com/ai16z/eliza/pull/427) ([odilitime](https://github.com/odilitime))

## [v0.1.3-alpha.0](https://github.com/ai16z/eliza/tree/v0.1.3-alpha.0) (2024-11-20)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.2...v0.1.3-alpha.0)

**Merged pull requests:**

- fix: linting and imports ready for npm [\#433](https://github.com/ai16z/eliza/pull/433) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- docs: Update contributing.md to incorporate Contribution Guidelines [\#430](https://github.com/ai16z/eliza/pull/430) ([monilpat](https://github.com/monilpat))

## [v0.1.2](https://github.com/ai16z/eliza/tree/v0.1.2) (2024-11-20)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.1.1...v0.1.2)

**Merged pull requests:**

- fix: configs [\#431](https://github.com/ai16z/eliza/pull/431) ([ponderingdemocritus](https://github.com/ponderingdemocritus))

## [v0.1.1](https://github.com/ai16z/eliza/tree/v0.1.1) (2024-11-20)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.0.10...v0.1.1)

**Implemented enhancements:**

- توکن های داگز ناتکویین تتر کتوز کویین به حسام واریز شود [\#420](https://github.com/ai16z/eliza/issues/420)
- New Plugin Idea: log discord and summarize channels [\#318](https://github.com/ai16z/eliza/issues/318)
- Add GROK Model Provider Key Support in `getTokenForProvider` Function [\#295](https://github.com/ai16z/eliza/issues/295)
- Feature Request: Automated Bot Registry and Private Communication Protocol [\#291](https://github.com/ai16z/eliza/issues/291)
- Unify ImageGen into ModelClass.IMAGE [\#223](https://github.com/ai16z/eliza/issues/223)
- Move services to plugins [\#222](https://github.com/ai16z/eliza/issues/222)
- Make sure system directive passed to vercel sdk [\#217](https://github.com/ai16z/eliza/issues/217)
- .env not loading? [\#213](https://github.com/ai16z/eliza/issues/213)
- Anthropic API key not loading correctly [\#212](https://github.com/ai16z/eliza/issues/212)
- Templates are wrong [\#209](https://github.com/ai16z/eliza/issues/209)
- Changelog generator [\#181](https://github.com/ai16z/eliza/issues/181)
- Prompt template overrides [\#166](https://github.com/ai16z/eliza/issues/166)
- Plugin System [\#159](https://github.com/ai16z/eliza/issues/159)
- Chattiness Slider/Respond to Bots setting in Discord [\#157](https://github.com/ai16z/eliza/issues/157)
- Abstract transcript provider [\#73](https://github.com/ai16z/eliza/issues/73)
- 🤖 Confidence Level Implementation [\#50](https://github.com/ai16z/eliza/issues/50)
- 📈 Trading Assistant Implementation [\#48](https://github.com/ai16z/eliza/issues/48)
- swap Dao action initital [\#196](https://github.com/ai16z/eliza/pull/196) ([MarcoMandar](https://github.com/MarcoMandar))

**Fixed bugs:**

- DTS Build error [\#401](https://github.com/ai16z/eliza/issues/401)
- build.sh crash [\#379](https://github.com/ai16z/eliza/issues/379)
- Node module version 127 vs 131 sqlite issue [\#337](https://github.com/ai16z/eliza/issues/337)
- Severe Bug - The program fails to start with the command 'pnpm start', urgent fix required [\#326](https://github.com/ai16z/eliza/issues/326)
- pnpm start reports an error and cannot be started. Why is this? I installed it according to the documentation steps. [\#288](https://github.com/ai16z/eliza/issues/288)
- Qucikstart guide doesn [\#283](https://github.com/ai16z/eliza/issues/283)
- inconsistent version of node  [\#269](https://github.com/ai16z/eliza/issues/269)
- ai16z.github.io/eliza page doesn't display properly in darkmode [\#268](https://github.com/ai16z/eliza/issues/268)
- Fresh install from main will not start with a characterfile [\#265](https://github.com/ai16z/eliza/issues/265)
- Issue with "cannot read properties of undefined" [\#238](https://github.com/ai16z/eliza/issues/238)
- .env is not being loaded or picked up in settings [\#229](https://github.com/ai16z/eliza/issues/229)
- agent & plugin-image-generation failed to build [\#227](https://github.com/ai16z/eliza/issues/227)
- Model provider loaded from char file should force lowercase, claude or anthropic should both work [\#211](https://github.com/ai16z/eliza/issues/211)
- AI provider API keys should work from character files [\#210](https://github.com/ai16z/eliza/issues/210)
- build docs locally gives errors [\#202](https://github.com/ai16z/eliza/issues/202)
- Telegram bot not returning responses [\#178](https://github.com/ai16z/eliza/issues/178)
- build docs doesn't seem to be working [\#176](https://github.com/ai16z/eliza/issues/176)
- Can't Update Character Personality After Modifications in defaultCharacter.ts [\#95](https://github.com/ai16z/eliza/issues/95)
- Time Interval of generateNewTweetLoop is not consistent with the comment [\#92](https://github.com/ai16z/eliza/issues/92)
- Execution gets stuck in a loop [\#70](https://github.com/ai16z/eliza/issues/70)
- Voice is not working, "null" from incoming messages [\#55](https://github.com/ai16z/eliza/issues/55)
- Fix name confusion [\#32](https://github.com/ai16z/eliza/issues/32)
- Fix memory mixing in Twitter generate [\#23](https://github.com/ai16z/eliza/issues/23)

**Closed issues:**

- Move cache into DB [\#403](https://github.com/ai16z/eliza/issues/403)
- Docs review [\#201](https://github.com/ai16z/eliza/issues/201)
- Commands for starting agents without character profiles [\#47](https://github.com/ai16z/eliza/issues/47)

**Merged pull requests:**

- feat: lerna an npm [\#428](https://github.com/ai16z/eliza/pull/428) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: don't continue to load if a specified file is not found [\#426](https://github.com/ai16z/eliza/pull/426) ([odilitime](https://github.com/odilitime))
- fix: Update adapters.md psql schema [\#424](https://github.com/ai16z/eliza/pull/424) ([tarrencev](https://github.com/tarrencev))
- Readme update WSL  2 link added. [\#419](https://github.com/ai16z/eliza/pull/419) ([denizekiz](https://github.com/denizekiz))
- feat: unruggable on starknet [\#418](https://github.com/ai16z/eliza/pull/418) ([RedBeardEth](https://github.com/RedBeardEth))
- fix: removed ollama embeddings. fastembeddings or openai only [\#413](https://github.com/ai16z/eliza/pull/413) ([o-on-x](https://github.com/o-on-x))
- feat: services [\#412](https://github.com/ai16z/eliza/pull/412) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- Add italian README.md translation [\#411](https://github.com/ai16z/eliza/pull/411) ([fabrizioff](https://github.com/fabrizioff))
- docs: add GROK\_API\_KEY [\#409](https://github.com/ai16z/eliza/pull/409) ([whalelephant](https://github.com/whalelephant))
- fix: Fixes [\#407](https://github.com/ai16z/eliza/pull/407) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: console [\#405](https://github.com/ai16z/eliza/pull/405) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: Lint [\#404](https://github.com/ai16z/eliza/pull/404) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: tsup build error \(client-twitter\) [\#402](https://github.com/ai16z/eliza/pull/402) ([leomercier](https://github.com/leomercier))
- feat: Create README\_ES.md [\#400](https://github.com/ai16z/eliza/pull/400) ([metadiver](https://github.com/metadiver))
- feat: unruggable [\#398](https://github.com/ai16z/eliza/pull/398) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- Register memory managers if passed to runtime [\#396](https://github.com/ai16z/eliza/pull/396) ([martincik](https://github.com/martincik))
- feat: video generation plugin [\#394](https://github.com/ai16z/eliza/pull/394) ([dorianjanezic](https://github.com/dorianjanezic))
- feat: Logging improvements [\#393](https://github.com/ai16z/eliza/pull/393) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: client null [\#390](https://github.com/ai16z/eliza/pull/390) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- docs: refresh eliza's tagline, fix broken links, unify formatting for core concepts [\#389](https://github.com/ai16z/eliza/pull/389) ([wahndo](https://github.com/wahndo))
- Fix tweet truncation issue by truncating at complete sentences [\#388](https://github.com/ai16z/eliza/pull/388) ([boyaloxer](https://github.com/boyaloxer))
- feat: Contextual Twitter Threads + Spam Reduction [\#383](https://github.com/ai16z/eliza/pull/383) ([ropresearch](https://github.com/ropresearch))
- feat: client [\#382](https://github.com/ai16z/eliza/pull/382) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: adds Groq to getTokenForProvider [\#381](https://github.com/ai16z/eliza/pull/381) ([bmgalego](https://github.com/bmgalego))
- docs: add Russian\(RU\) translation of README  [\#380](https://github.com/ai16z/eliza/pull/380) ([whonion](https://github.com/whonion))
- docs: Update README\_FR.md [\#377](https://github.com/ai16z/eliza/pull/377) ([xclicx](https://github.com/xclicx))
- docs: add Turkish \(TR\) translation of README [\#376](https://github.com/ai16z/eliza/pull/376) ([oguzserdar](https://github.com/oguzserdar))
- feat: Enhance Heurist Image Generation Settings and Image Handling [\#375](https://github.com/ai16z/eliza/pull/375) ([tsubasakong](https://github.com/tsubasakong))
- fix: ca for btc was spam/fake [\#374](https://github.com/ai16z/eliza/pull/374) ([thearyanag](https://github.com/thearyanag))
- feat: starknet token transfer [\#373](https://github.com/ai16z/eliza/pull/373) ([enitrat](https://github.com/enitrat))
- feat: install clients from plugin [\#371](https://github.com/ai16z/eliza/pull/371) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- feat: readme [\#370](https://github.com/ai16z/eliza/pull/370) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- default set to new standard  post time 90-180 type: post time [\#369](https://github.com/ai16z/eliza/pull/369) ([o-on-x](https://github.com/o-on-x))
- post time set in env [\#368](https://github.com/ai16z/eliza/pull/368) ([o-on-x](https://github.com/o-on-x))
- feat: Adding unit tests for start - Covering goals, defaultCharacters, relationships, evaulators, posts, database, messages [\#367](https://github.com/ai16z/eliza/pull/367) ([ai16z-demirix](https://github.com/ai16z-demirix))
- fix: bug in getRecentMessageInteractions not awating for promisses before formating [\#366](https://github.com/ai16z/eliza/pull/366) ([bmgalego](https://github.com/bmgalego))
- feat: \[Issue-185\] Token Provider Tests  [\#365](https://github.com/ai16z/eliza/pull/365) ([normand1](https://github.com/normand1))
- feat: update docs with new stream notes [\#364](https://github.com/ai16z/eliza/pull/364) ([madjin](https://github.com/madjin))
- update tweet interval to 90-180 mins [\#360](https://github.com/ai16z/eliza/pull/360) ([oguzserdar](https://github.com/oguzserdar))
- fix: openrouter 70b don't support 128000, changed to 405b in model.ts [\#356](https://github.com/ai16z/eliza/pull/356) ([denizekiz](https://github.com/denizekiz))
- feat: Complete Starknet DB Trust [\#355](https://github.com/ai16z/eliza/pull/355) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: solana [\#354](https://github.com/ai16z/eliza/pull/354) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- Add Community & contact and Star History [\#353](https://github.com/ai16z/eliza/pull/353) ([thejoven](https://github.com/thejoven))
- feat: trust db [\#349](https://github.com/ai16z/eliza/pull/349) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- change default configuration of Heurist [\#348](https://github.com/ai16z/eliza/pull/348) ([wjw12](https://github.com/wjw12))
- trust fixes [\#347](https://github.com/ai16z/eliza/pull/347) ([MarcoMandar](https://github.com/MarcoMandar))
- fix: some trust fixes [\#346](https://github.com/ai16z/eliza/pull/346) ([lalalune](https://github.com/lalalune))
- getOrCreateRecommenderWithTelegramId [\#345](https://github.com/ai16z/eliza/pull/345) ([MarcoMandar](https://github.com/MarcoMandar))
- fix: imports and cleanups [\#344](https://github.com/ai16z/eliza/pull/344) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- fix: dev build [\#343](https://github.com/ai16z/eliza/pull/343) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
-  Update Heurist Integration Documentation and Examples [\#339](https://github.com/ai16z/eliza/pull/339) ([tsubasakong](https://github.com/tsubasakong))
- added clientConfig to optionally ignore bots and DMs [\#336](https://github.com/ai16z/eliza/pull/336) ([vivoidos](https://github.com/vivoidos))
- feat: Add Heurist API Integration as New Model Provider [\#335](https://github.com/ai16z/eliza/pull/335) ([tsubasakong](https://github.com/tsubasakong))
- Docs: additional Quickstart clarification and improvements [\#334](https://github.com/ai16z/eliza/pull/334) ([odilitime](https://github.com/odilitime))
- Docs: README.md improvements: clarify testing, add additional docker information [\#333](https://github.com/ai16z/eliza/pull/333) ([odilitime](https://github.com/odilitime))
- fix: Build error for packages requiring @ai16z/eliza [\#331](https://github.com/ai16z/eliza/pull/331) ([shakkernerd](https://github.com/shakkernerd))
- claude vertex configs added to generation.ts \(was missing\) [\#330](https://github.com/ai16z/eliza/pull/330) ([denizekiz](https://github.com/denizekiz))
- README\_KOR.md Korean version edited by a Korean  [\#329](https://github.com/ai16z/eliza/pull/329) ([zo-eth](https://github.com/zo-eth))
- Save Trade on creation to the backend [\#328](https://github.com/ai16z/eliza/pull/328) ([MarcoMandar](https://github.com/MarcoMandar))
- Update Quickstart Guide [\#325](https://github.com/ai16z/eliza/pull/325) ([odilitime](https://github.com/odilitime))
- utils.ts example tweet splitting [\#323](https://github.com/ai16z/eliza/pull/323) ([o-on-x](https://github.com/o-on-x))
- Fix broken docs [\#321](https://github.com/ai16z/eliza/pull/321) ([madjin](https://github.com/madjin))
- docs: add a new Portuguese README version [\#320](https://github.com/ai16z/eliza/pull/320) ([gabrielsants](https://github.com/gabrielsants))
- added working pumpfun.ts [\#313](https://github.com/ai16z/eliza/pull/313) ([o-on-x](https://github.com/o-on-x))
- Add Korean and French README [\#312](https://github.com/ai16z/eliza/pull/312) ([BugByClaude](https://github.com/BugByClaude))
- fix service call patterns but needs testing [\#311](https://github.com/ai16z/eliza/pull/311) ([lalalune](https://github.com/lalalune))
- Increased llama and llama based model temperatures [\#310](https://github.com/ai16z/eliza/pull/310) ([alanneary17](https://github.com/alanneary17))
- \[LLM Object Generation\]\[1/2\] Leverage AI Lib's Generate Object instead of parsing strings [\#309](https://github.com/ai16z/eliza/pull/309) ([monilpat](https://github.com/monilpat))
- Telegram client refactor for bot info availability [\#308](https://github.com/ai16z/eliza/pull/308) ([ropresearch](https://github.com/ropresearch))
- docs: add a new Japanese README [\#307](https://github.com/ai16z/eliza/pull/307) ([eltociear](https://github.com/eltociear))
- telegram: start agent after client initialization [\#304](https://github.com/ai16z/eliza/pull/304) ([o-on-x](https://github.com/o-on-x))
- add node version check [\#299](https://github.com/ai16z/eliza/pull/299) ([thearyanag](https://github.com/thearyanag))
- Added Transfer / Send Token Action [\#297](https://github.com/ai16z/eliza/pull/297) ([o-on-x](https://github.com/o-on-x))
- Added missing GROK model provider key initialization [\#296](https://github.com/ai16z/eliza/pull/296) ([FabriceIRANKUNDA](https://github.com/FabriceIRANKUNDA))
- Dockerized application for local development, testing and deployment [\#293](https://github.com/ai16z/eliza/pull/293) ([pindaroso](https://github.com/pindaroso))
- feat: Starknet plugin [\#287](https://github.com/ai16z/eliza/pull/287) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- Loaf stuff [\#286](https://github.com/ai16z/eliza/pull/286) ([lalalune](https://github.com/lalalune))
- Bundles [\#285](https://github.com/ai16z/eliza/pull/285) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- Don't blow up if the wallet is missing [\#281](https://github.com/ai16z/eliza/pull/281) ([ferric-sol](https://github.com/ferric-sol))
- docs homepage rework [\#280](https://github.com/ai16z/eliza/pull/280) ([mrpspring](https://github.com/mrpspring))
- fix docs: add python as a prerequisite \(needed for node-gyp\) [\#277](https://github.com/ai16z/eliza/pull/277) ([metadiver](https://github.com/metadiver))
- Fix: compute unit increasein swapts, default is too low to make trans… [\#276](https://github.com/ai16z/eliza/pull/276) ([denizekiz](https://github.com/denizekiz))
- add modelProvider to json to resolve embeddings error [\#274](https://github.com/ai16z/eliza/pull/274) ([twilwa](https://github.com/twilwa))
- Improve Docs [\#273](https://github.com/ai16z/eliza/pull/273) ([madjin](https://github.com/madjin))
- fix: docs features darkmode color [\#266](https://github.com/ai16z/eliza/pull/266) ([fabianhug](https://github.com/fabianhug))
- twitter-profile-remake [\#263](https://github.com/ai16z/eliza/pull/263) ([alextitonis](https://github.com/alextitonis))
- cachedEmbeddings fix [\#262](https://github.com/ai16z/eliza/pull/262) ([dorianjanezic](https://github.com/dorianjanezic))
- Fix embedding calculation for sqlite [\#261](https://github.com/ai16z/eliza/pull/261) ([ferric-sol](https://github.com/ferric-sol))
- Fix: changed claude-3-5-haiku to claude-3-5-haiku-20241022 for fixing… [\#257](https://github.com/ai16z/eliza/pull/257) ([denizekiz](https://github.com/denizekiz))
- bigint support in logger [\#256](https://github.com/ai16z/eliza/pull/256) ([o-on-x](https://github.com/o-on-x))
- embedding set to use openai endpoint when using openai embeddings [\#255](https://github.com/ai16z/eliza/pull/255) ([o-on-x](https://github.com/o-on-x))
- refactor embeddings  [\#254](https://github.com/ai16z/eliza/pull/254) ([o-on-x](https://github.com/o-on-x))
- Update docs [\#253](https://github.com/ai16z/eliza/pull/253) ([madjin](https://github.com/madjin))
- use openai embeddings setting [\#252](https://github.com/ai16z/eliza/pull/252) ([o-on-x](https://github.com/o-on-x))
- recommendations, token info, client auto [\#250](https://github.com/ai16z/eliza/pull/250) ([MarcoMandar](https://github.com/MarcoMandar))
- add verbose config with logger [\#249](https://github.com/ai16z/eliza/pull/249) ([v1xingyue](https://github.com/v1xingyue))
- trust integration [\#248](https://github.com/ai16z/eliza/pull/248) ([MarcoMandar](https://github.com/MarcoMandar))
- Working PostGres Adapter [\#247](https://github.com/ai16z/eliza/pull/247) ([cvartanian](https://github.com/cvartanian))
- Support google models in generation [\#246](https://github.com/ai16z/eliza/pull/246) ([parzival418](https://github.com/parzival418))
- Added OpenRouter model provider [\#245](https://github.com/ai16z/eliza/pull/245) ([o-on-x](https://github.com/o-on-x))
- update docs [\#233](https://github.com/ai16z/eliza/pull/233) ([madjin](https://github.com/madjin))
- Update Docs [\#231](https://github.com/ai16z/eliza/pull/231) ([madjin](https://github.com/madjin))
- plugin-image-generation tsconfig.json fix & ollama error handling [\#228](https://github.com/ai16z/eliza/pull/228) ([o-on-x](https://github.com/o-on-x))
- move code out to plugins, adapters and clients [\#225](https://github.com/ai16z/eliza/pull/225) ([lalalune](https://github.com/lalalune))
- models.gguf stored in models file, & tsconfig changes for ref @eliza/core & other things [\#224](https://github.com/ai16z/eliza/pull/224) ([o-on-x](https://github.com/o-on-x))
- Add OLLAMA as Model Provider  [\#221](https://github.com/ai16z/eliza/pull/221) ([o-on-x](https://github.com/o-on-x))
- lazy load llama [\#220](https://github.com/ai16z/eliza/pull/220) ([lalalune](https://github.com/lalalune))
- Implement grok beta [\#216](https://github.com/ai16z/eliza/pull/216) ([MeDott29](https://github.com/MeDott29))
- Abstracts Eliza into a Package to enble publishing onto NPM along with plugin system [\#214](https://github.com/ai16z/eliza/pull/214) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- add the template overrides [\#207](https://github.com/ai16z/eliza/pull/207) ([lalalune](https://github.com/lalalune))
- Shaw fix characters paths, .ts requirement and missings args [\#204](https://github.com/ai16z/eliza/pull/204) ([lalalune](https://github.com/lalalune))
- Fix Discord Voice and DMs [\#203](https://github.com/ai16z/eliza/pull/203) ([lalalune](https://github.com/lalalune))
- Major documentation updates [\#199](https://github.com/ai16z/eliza/pull/199) ([madjin](https://github.com/madjin))
- Add RedPill API Support [\#198](https://github.com/ai16z/eliza/pull/198) ([HashWarlock](https://github.com/HashWarlock))
- Swap functionality [\#197](https://github.com/ai16z/eliza/pull/197) ([lalalune](https://github.com/lalalune))
- Updated documentation [\#195](https://github.com/ai16z/eliza/pull/195) ([atvonsc](https://github.com/atvonsc))
- Groq api integration [\#194](https://github.com/ai16z/eliza/pull/194) ([juke](https://github.com/juke))

## [v0.0.10](https://github.com/ai16z/eliza/tree/v0.0.10) (2024-11-04)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.0.9...v0.0.10)

## [v0.0.9](https://github.com/ai16z/eliza/tree/v0.0.9) (2024-11-04)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.0.8...v0.0.9)

## [v0.0.8](https://github.com/ai16z/eliza/tree/v0.0.8) (2024-11-04)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.0.7...v0.0.8)

## [v0.0.7](https://github.com/ai16z/eliza/tree/v0.0.7) (2024-11-04)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.0.6...v0.0.7)

## [v0.0.6](https://github.com/ai16z/eliza/tree/v0.0.6) (2024-11-04)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.0.5...v0.0.6)

## [v0.0.5](https://github.com/ai16z/eliza/tree/v0.0.5) (2024-11-04)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.0.4...v0.0.5)

## [v0.0.4](https://github.com/ai16z/eliza/tree/v0.0.4) (2024-11-04)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.0.3...v0.0.4)

## [v0.0.3](https://github.com/ai16z/eliza/tree/v0.0.3) (2024-11-04)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.0.2...v0.0.3)

**Closed issues:**

- Get CI/CD working [\#174](https://github.com/ai16z/eliza/issues/174)

**Merged pull requests:**

- Update generate-changelog.yml [\#192](https://github.com/ai16z/eliza/pull/192) ([sirkitree](https://github.com/sirkitree))

## [v0.0.2](https://github.com/ai16z/eliza/tree/v0.0.2) (2024-11-03)

[Full Changelog](https://github.com/ai16z/eliza/compare/v0.0.1...v0.0.2)

**Implemented enhancements:**

- Set Port Number in Env to Run Multiple Instances [\#156](https://github.com/ai16z/eliza/issues/156)
- Renovate bot for automated updates on dependencies [\#58](https://github.com/ai16z/eliza/issues/58)
- How to chat directly with agent [\#40](https://github.com/ai16z/eliza/issues/40)
- Telegram Improvements [\#35](https://github.com/ai16z/eliza/issues/35)
- Make sure app runs purely on char files, no process.env, and vice versa [\#30](https://github.com/ai16z/eliza/issues/30)
- Image Generation [\#22](https://github.com/ai16z/eliza/issues/22)
- Telegram Bot [\#21](https://github.com/ai16z/eliza/issues/21)
- Multi-model abstraction [\#19](https://github.com/ai16z/eliza/issues/19)
- updates to order book and trust score, virtual confidence, last active, decay score, validation trust, multiple recommenders [\#175](https://github.com/ai16z/eliza/pull/175) ([MarcoMandar](https://github.com/MarcoMandar))
- Trustscore, token-performance, token performance simulation [\#101](https://github.com/ai16z/eliza/pull/101) ([MarcoMandar](https://github.com/MarcoMandar))

**Fixed bugs:**

- TypeError: Cannot read properties of null \(reading 'queueTextCompletion'\) [\#168](https://github.com/ai16z/eliza/issues/168)
- TypeError: Promise.withResolvers is not a function [\#76](https://github.com/ai16z/eliza/issues/76)
- sqlite\_vss unsupported on win32-x64 [\#37](https://github.com/ai16z/eliza/issues/37)

**Closed issues:**

- Make sure 100% works with local models [\#69](https://github.com/ai16z/eliza/issues/69)
- shouldRespond handler for twitter interactions [\#68](https://github.com/ai16z/eliza/issues/68)
- docs [\#34](https://github.com/ai16z/eliza/issues/34)

**Merged pull requests:**

- 181  generate changelog [\#182](https://github.com/ai16z/eliza/pull/182) ([sirkitree](https://github.com/sirkitree))
- server port in env [\#179](https://github.com/ai16z/eliza/pull/179) ([alextitonis](https://github.com/alextitonis))
- prettier log setup, minor cleanups [\#177](https://github.com/ai16z/eliza/pull/177) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- postgres updates [\#173](https://github.com/ai16z/eliza/pull/173) ([minghinmatthewlam](https://github.com/minghinmatthewlam))
- adjusting test setup and adding a basic test [\#172](https://github.com/ai16z/eliza/pull/172) ([sirkitree](https://github.com/sirkitree))
- feat: Shorten response verbosity [\#170](https://github.com/ai16z/eliza/pull/170) ([bigsky77](https://github.com/bigsky77))
- clean up index [\#163](https://github.com/ai16z/eliza/pull/163) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- Import work and cleanup [\#162](https://github.com/ai16z/eliza/pull/162) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- type export structure [\#160](https://github.com/ai16z/eliza/pull/160) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- Update ci.yaml [\#155](https://github.com/ai16z/eliza/pull/155) ([sirkitree](https://github.com/sirkitree))
- Create pull\_request\_template.md [\#154](https://github.com/ai16z/eliza/pull/154) ([sirkitree](https://github.com/sirkitree))
- fixed issue with openai [\#153](https://github.com/ai16z/eliza/pull/153) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- update docs [\#152](https://github.com/ai16z/eliza/pull/152) ([madjin](https://github.com/madjin))
- fix name of ImageGeneration.ts [\#151](https://github.com/ai16z/eliza/pull/151) ([twilwa](https://github.com/twilwa))
- Feat/mono [\#150](https://github.com/ai16z/eliza/pull/150) ([ponderingdemocritus](https://github.com/ponderingdemocritus))
- update docs [\#149](https://github.com/ai16z/eliza/pull/149) ([madjin](https://github.com/madjin))
- Dependency update testing [\#147](https://github.com/ai16z/eliza/pull/147) ([sirkitree](https://github.com/sirkitree))
- chore\(deps\): Upgrade uuid to v11 and TypeScript to v8 [\#143](https://github.com/ai16z/eliza/pull/143) ([5c0](https://github.com/5c0))
- fix\(deps\): update dependency uuid to v11 [\#142](https://github.com/ai16z/eliza/pull/142) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update typescript and related to v8 \(major\) [\#141](https://github.com/ai16z/eliza/pull/141) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update eslint and formatting \(major\) [\#139](https://github.com/ai16z/eliza/pull/139) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency typedoc-plugin-markdown to v4 [\#138](https://github.com/ai16z/eliza/pull/138) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency rimraf to v6 - autoclosed [\#137](https://github.com/ai16z/eliza/pull/137) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency npm-run-all2 to v7 [\#136](https://github.com/ai16z/eliza/pull/136) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency itty-router to v5 [\#135](https://github.com/ai16z/eliza/pull/135) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency docusaurus-plugin-typedoc to v1 [\#134](https://github.com/ai16z/eliza/pull/134) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency @types/node to v22 [\#133](https://github.com/ai16z/eliza/pull/133) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency @types/jest to v29 [\#132](https://github.com/ai16z/eliza/pull/132) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update react monorepo to v18.3.1 [\#131](https://github.com/ai16z/eliza/pull/131) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update docusaurus monorepo to v3.5.2 [\#130](https://github.com/ai16z/eliza/pull/130) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency sql.js to v1.12.0 [\#129](https://github.com/ai16z/eliza/pull/129) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency react-router-dom to v6.27.0 [\#128](https://github.com/ai16z/eliza/pull/128) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency prism-react-renderer to v2.4.0 [\#127](https://github.com/ai16z/eliza/pull/127) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency playwright to v1.48.2 [\#126](https://github.com/ai16z/eliza/pull/126) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency pdfjs-dist to v4.7.76 [\#125](https://github.com/ai16z/eliza/pull/125) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency onnxruntime-node to v1.20.0 - autoclosed [\#124](https://github.com/ai16z/eliza/pull/124) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency node-llama-cpp to v3.1.1 [\#123](https://github.com/ai16z/eliza/pull/123) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency jieba-wasm to v2.2.0 [\#122](https://github.com/ai16z/eliza/pull/122) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency figlet to v1.8.0 [\#121](https://github.com/ai16z/eliza/pull/121) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency better-sqlite3 to v11.5.0 [\#120](https://github.com/ai16z/eliza/pull/120) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency @supabase/supabase-js to v2.46.1 [\#119](https://github.com/ai16z/eliza/pull/119) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency @mdx-js/react to v3.1.0 [\#118](https://github.com/ai16z/eliza/pull/118) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency @echogarden/speex-resampler-wasm to v0.2.1 [\#117](https://github.com/ai16z/eliza/pull/117) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency @echogarden/kissfft-wasm to v0.2.0 [\#116](https://github.com/ai16z/eliza/pull/116) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency @echogarden/espeak-ng-emscripten to v0.3.0 [\#115](https://github.com/ai16z/eliza/pull/115) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency @cliqz/adblocker-playwright to v1.34.0 [\#114](https://github.com/ai16z/eliza/pull/114) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): pin dependencies [\#113](https://github.com/ai16z/eliza/pull/113) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency @rollup/plugin-terser to v0.4.4 [\#112](https://github.com/ai16z/eliza/pull/112) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency wrangler to v3.84.0 [\#111](https://github.com/ai16z/eliza/pull/111) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency typedoc to v0.26.10 [\#110](https://github.com/ai16z/eliza/pull/110) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency @types/node to v20.17.3 [\#109](https://github.com/ai16z/eliza/pull/109) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency socket.io to v4.8.1 [\#108](https://github.com/ai16z/eliza/pull/108) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency nodemon to v3.1.7 [\#107](https://github.com/ai16z/eliza/pull/107) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency clsx to v2.1.1 [\#106](https://github.com/ai16z/eliza/pull/106) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency @diffusionstudio/vits-web to v1.0.3 [\#105](https://github.com/ai16z/eliza/pull/105) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency npm-run-all2 to v5.0.2 [\#104](https://github.com/ai16z/eliza/pull/104) ([renovate[bot]](https://github.com/apps/renovate))
- Postgres DB Adapter [\#102](https://github.com/ai16z/eliza/pull/102) ([leomercier](https://github.com/leomercier))
- chore\(deps\): update dependency @types/fluent-ffmpeg to v2.1.27 [\#100](https://github.com/ai16z/eliza/pull/100) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): pin dependency socket.io to 4.8.0 [\#99](https://github.com/ai16z/eliza/pull/99) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): pin dependencies [\#98](https://github.com/ai16z/eliza/pull/98) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency discord.js to v14.16.3 [\#97](https://github.com/ai16z/eliza/pull/97) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency eslint to v8.57.1 [\#96](https://github.com/ai16z/eliza/pull/96) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): pin dependencies [\#94](https://github.com/ai16z/eliza/pull/94) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): pin dependencies [\#93](https://github.com/ai16z/eliza/pull/93) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): pin dependencies [\#90](https://github.com/ai16z/eliza/pull/90) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency tslib to v2.8.0 [\#89](https://github.com/ai16z/eliza/pull/89) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): pin dependencies [\#88](https://github.com/ai16z/eliza/pull/88) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): pin dependencies [\#87](https://github.com/ai16z/eliza/pull/87) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): pin dependencies [\#86](https://github.com/ai16z/eliza/pull/86) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update rollup and plugins [\#85](https://github.com/ai16z/eliza/pull/85) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): pin dependencies [\#84](https://github.com/ai16z/eliza/pull/84) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): pin dependencies [\#83](https://github.com/ai16z/eliza/pull/83) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): replace dependency npm-run-all with npm-run-all2 5.0.0 [\#82](https://github.com/ai16z/eliza/pull/82) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(config\): migrate renovate config [\#80](https://github.com/ai16z/eliza/pull/80) ([renovate[bot]](https://github.com/apps/renovate))
- fix\(deps\): update dependency pdfjs-dist to v4.2.67 \[security\] [\#78](https://github.com/ai16z/eliza/pull/78) ([renovate[bot]](https://github.com/apps/renovate))
- chore\(deps\): update dependency rollup to v2.79.2 \[security\] [\#77](https://github.com/ai16z/eliza/pull/77) ([renovate[bot]](https://github.com/apps/renovate))
- Model provider abstraction [\#74](https://github.com/ai16z/eliza/pull/74) ([lalalune](https://github.com/lalalune))
- Image gen [\#44](https://github.com/ai16z/eliza/pull/44) ([alextitonis](https://github.com/alextitonis))

## [v0.0.1](https://github.com/ai16z/eliza/tree/v0.0.1) (2024-10-29)

[Full Changelog](https://github.com/ai16z/eliza/compare/e5a15663d7d083f4c9b82634a0696b80b9ecd0b2...v0.0.1)

**Closed issues:**

- cleanup remnants of sqlite\_vss [\#66](https://github.com/ai16z/eliza/issues/66)
- Create issue templates [\#61](https://github.com/ai16z/eliza/issues/61)
- Contributing [\#45](https://github.com/ai16z/eliza/issues/45)
- How to specify a character file [\#39](https://github.com/ai16z/eliza/issues/39)
- Easy switching between openai and llama [\#15](https://github.com/ai16z/eliza/issues/15)
- Get image media from Discord and describe it [\#14](https://github.com/ai16z/eliza/issues/14)
- Summarize links from Discord and Twitter [\#13](https://github.com/ai16z/eliza/issues/13)
- Get image media from tweets and describe it [\#11](https://github.com/ai16z/eliza/issues/11)
- Feed Twitter Client [\#10](https://github.com/ai16z/eliza/issues/10)
- Replace Elevenlabs with faster TTS [\#6](https://github.com/ai16z/eliza/issues/6)
- Integrate Moondream into Twitter and Discord [\#5](https://github.com/ai16z/eliza/issues/5)
- Replace GPT-3.5 with Node Llama3 [\#3](https://github.com/ai16z/eliza/issues/3)
- Replace OpenAI Whisper with Whisper Turbo [\#2](https://github.com/ai16z/eliza/issues/2)
- Integrate agent-twitter-client [\#1](https://github.com/ai16z/eliza/issues/1)

**Merged pull requests:**

- chore: fix typo [\#71](https://github.com/ai16z/eliza/pull/71) ([eltociear](https://github.com/eltociear))
- cleanup from \#60, resolves \#66 [\#67](https://github.com/ai16z/eliza/pull/67) ([sirkitree](https://github.com/sirkitree))
- Telegram Integration with shouldRespond handler + image recognition [\#65](https://github.com/ai16z/eliza/pull/65) ([dreaminglucid](https://github.com/dreaminglucid))
- Initial commit for adding Renovate autoupdater. [\#63](https://github.com/ai16z/eliza/pull/63) ([mrdavidburns](https://github.com/mrdavidburns))
- adding github issue templates [\#62](https://github.com/ai16z/eliza/pull/62) ([sirkitree](https://github.com/sirkitree))
- sqlite\_vss issue [\#60](https://github.com/ai16z/eliza/pull/60) ([MarcoMandar](https://github.com/MarcoMandar))
- Clarifying instructions to run locally [\#59](https://github.com/ai16z/eliza/pull/59) ([ferric-sol](https://github.com/ferric-sol))
- corrected node-llama-cpp command [\#57](https://github.com/ai16z/eliza/pull/57) ([Honkware](https://github.com/Honkware))
- Adding a CONTRIBUTING.md [\#46](https://github.com/ai16z/eliza/pull/46) ([sirkitree](https://github.com/sirkitree))
- pumpfun [\#43](https://github.com/ai16z/eliza/pull/43) ([MarcoMandar](https://github.com/MarcoMandar))
- provide a way to chat directly with the agent via the command line  [\#42](https://github.com/ai16z/eliza/pull/42) ([sirkitree](https://github.com/sirkitree))
- Update README.md [\#41](https://github.com/ai16z/eliza/pull/41) ([sirkitree](https://github.com/sirkitree))
- Update README.md [\#36](https://github.com/ai16z/eliza/pull/36) ([wahndo](https://github.com/wahndo))
- Telegram [\#31](https://github.com/ai16z/eliza/pull/31) ([lalalune](https://github.com/lalalune))
- token provider [\#24](https://github.com/ai16z/eliza/pull/24) ([MarcoMandar](https://github.com/MarcoMandar))
- minor fixes to base.ts and llama.ts, resolved missing package.json im… [\#20](https://github.com/ai16z/eliza/pull/20) ([twilwa](https://github.com/twilwa))
- More twitter upgrades and refactoring [\#18](https://github.com/ai16z/eliza/pull/18) ([lalalune](https://github.com/lalalune))
- Refactor, Plumbing, Twitter Agent [\#17](https://github.com/ai16z/eliza/pull/17) ([lalalune](https://github.com/lalalune))
- Integrate Moondream into Twitter and Discord [\#16](https://github.com/ai16z/eliza/pull/16) ([vladkashka56](https://github.com/vladkashka56))
- New Twitter Client [\#8](https://github.com/ai16z/eliza/pull/8) ([lalalune](https://github.com/lalalune))



\* *This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)*
