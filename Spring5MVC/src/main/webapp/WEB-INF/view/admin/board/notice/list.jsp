<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
			<main class="main">
				<h2 class="main title">공지사항</h2>

				<div class="breadcrumb">
					<h3 class="hidden">경로</h3>
					<ul>
						<li>home</li>
						<li>고객센터</li>
						<li>공지사항</li>
					</ul>
				</div>

				<div class="search-form margin-top first align-right">
					<h3 class="hidden">공지사항 검색폼</h3>
					<form class="table-form">
						<fieldset>
							<legend class="hidden">공지사항 검색 필드</legend>
							<label class="hidden">검색분류</label>
							<select name="f">
								<option value="title">제목</option>
								<option value="writerId">작성자</option>
							</select>
							<label class="hidden">검색어</label>
							<input type="text" name="q" value="" />
							<input class="btn btn-search" type="submit" value="검색" />
						</fieldset>
					</form>
				</div>

				<div class="notice margin-top">
					<h3 class="hidden">공지사항 목록</h3>
					<table class="table">
						<thead>
							<tr>
								<th class="w60">번호</th>
								<th class="expand">제목</th>
								<th class="w100">작성자</th>
								<th class="w100">작성일</th>
								<th class="w60">조회수</th>
								<th class="w40">공개</th>
								<th class="w40">삭제</th>
							</tr>
						</thead>
						<tbody>

							<tr>
								<td>8</td>
								<td class="title indent text-align-left"><a href="detail.html">스프링 8강까지의 예제 코드</a></td>
								<td>newlec</td>
								<td>
									2019-08-18
								</td>
								<td>146</td>
								<td><input type="checkbox" name="open"></td>
								<td><input type="checkbox" name="del"></td>
							</tr>

							<tr>
								<td>7</td>
								<td class="title indent text-align-left"><a href="detail.html">스프링 DI 예제 코드</a></td>
								<td>newlec</td>
								<td>
									2019-08-15
								</td>
								<td>131</td>
								<td><input type="checkbox" name="open"></td>
								<td><input type="checkbox" name="del"></td>
							</tr>

							<tr>
								<td>6</td>
								<td class="title indent text-align-left"><a href="detail.html">뉴렉쌤 9월 초 국기과정 모집 안내</a>
								</td>
								<td>newlec</td>
								<td>
									2019-06-11
								</td>
								<td>517</td>
								<td><input type="checkbox" name="open"></td>
								<td><input type="checkbox" name="del"></td>
							</tr>

							<tr>
								<td>5</td>
								<td class="title indent text-align-left"><a href="detail.html">뉴렉처 강의 수강 방식 안내</a></td>
								<td>newlec</td>
								<td>
									2019-05-24
								</td>
								<td>448</td>
								<td><input type="checkbox" name="open"></td>
								<td><input type="checkbox" name="del"></td>
							</tr>

							<tr>
								<td>4</td>
								<td class="title indent text-align-left"><a href="detail.html">자바 구조적인 프로그래밍 강의 예제
										파일</a></td>
								<td>newlec</td>
								<td>
									2019-04-24
								</td>
								<td>520</td>
								<td><input type="checkbox" name="open"></td>
								<td><input type="checkbox" name="del"></td>
							</tr>


						</tbody>
					</table>
				</div>

				<div class="indexer margin-top align-right">
					<h3 class="hidden">현재 페이지</h3>
					<div><span class="text-orange text-strong">1</span> / 1 pages</div>
				</div>

				<div class="text-align-right margin-top">
					<input type="submit" class="btn-text btn-default" value="일괄공개">
					<input type="submit" class="btn-text btn-default" value="일괄삭제">
					<a class="btn-text btn-default" href="reg.html">글쓰기</a>				
				</div>

				<div class="margin-top align-center pager">

					<div>


						<span class="btn btn-prev" onclick="alert('이전 페이지가 없습니다.');">이전</span>

					</div>
					<ul class="-list- center">
						<li><a class="-text- orange bold" href="?p=1&t=&q=">1</a></li>

					</ul>
					<div>


						<span class="btn btn-next" onclick="alert('다음 페이지가 없습니다.');">다음</span>

					</div>

				</div>
			</main>
    